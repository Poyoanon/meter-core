import cap from "cap";
import { isIPv4 } from "net";
import { TypedEmitter } from "tiny-typed-emitter";
import { TCPTracker, TCPSession } from "./tcp_tracker";

const { findDevice, deviceList } = cap.Cap;
const { Ethernet, PROTOCOL, IPV4, TCP } = cap.decoders;

export { findDevice, deviceList };

interface PktCaptureEvents {
  packet: (buf: Buffer) => void;
}

export class PktCapture extends TypedEmitter<PktCaptureEvents> {
  c: cap.Cap;
  #buffer: Buffer;
  constructor(addr: string, device: string) {
    super();
    this.c = new cap.Cap();
    this.#buffer = Buffer.alloc(65535);
    const linkType = this.c.open(device, "tcp and (src port 6040 or dst port 6040)", 10 * 1024 * 1024, this.#buffer);
    const packetBuffer = new PacketBuffer();
    const tcpTracker = new TCPTracker(addr, 6040);
    if (this.c.setMinBytes) this.c.setMinBytes(54); // pkt header size

    this.c.on("packet", (nbytes: number, truncated: boolean) => {
      if (linkType === "ETHERNET") {
        const ethernet = Ethernet(this.#buffer);
        if (ethernet.info.type === PROTOCOL.ETHERNET.IPV4) {
          const ipv4 = IPV4(this.#buffer, ethernet.offset);
          if (ipv4.info.protocol === PROTOCOL.IP.TCP) {
            const tcp = TCP(this.#buffer, ipv4.offset);
            tcpTracker.track_packet(this.#buffer, ipv4, tcp);
          }
        }
      }
    });
    tcpTracker.on("session", (session: TCPSession) => {
      //console.log(`New session ${session.src}->${session.dst}`);
      session.on("payload_recv", (data: Buffer) => {
        packetBuffer.write(data);
        let pkt = packetBuffer.read();
        while (pkt) {
          this.emit("packet", pkt);
          pkt = packetBuffer.read();
        }
      });
    });
  }

  close() {
    this.c.close();
  }
}

interface PktCaptureAllEvents {
  packet: (buf: Buffer, deviceName: string) => void;
}

export class PktCaptureAll extends TypedEmitter<PktCaptureAllEvents> {
  caps: Map<string, PktCapture>;

  constructor(logErrorFunc: (arg?: any, ...args: any[]) => void) {
    super();
    this.caps = new Map();
    for (const device of deviceList()) {
      for (const address of device.addresses) {
        if (isIPv4(address.addr!) && address.addr === "192.168.0.51") {
          try {
            const cap = new PktCapture(address.addr!, device.name);

            // re-emit
            cap.on("packet", (buf) => this.emit("packet", buf, device.name));

            // close others
            /* cap.once("packet", () => {
              for (const [name, cap] of this.caps.entries()) {
                if (name != device.name) cap.close();
              }
            }); */

            this.caps.set(device.name, cap);
          } catch (e) {
            logErrorFunc(`[meter-core/PktCaptureAll] ${e}`);
          }
        }
      }
    }
  }

  close() {
    for (const cap of this.caps.values()) cap.close();
  }
}

class PacketBuffer {
  buffer: Buffer | null;
  position: number;
  out: Buffer[];

  constructor() {
    this.buffer = null;
    this.position = 0;
    this.out = [];
  }

  write(data: Buffer) {
    // we'll chop off the front of `data` with each loop
    while (data.length > 0) {
      // if we have a buffer prepared, we should append to it first
      if (this.buffer) {
        // if our buffer size is less than 2, we'll need to compute the full size
        if (this.buffer.length < 2) {
          const old = this.buffer[0]!; // save old byte
          const size = (data[0]! << 8) + old!; // convert from little-endian
          this.buffer = Buffer.alloc(size); // make new buffer
          this.buffer[0] = old; // write old value
          this.position = 1; // update position
        }

        // write as many bytes as we can
        const remaining = Math.min(data.length, this.buffer.length - this.position);
        data.copy(this.buffer, this.position, 0, remaining);
        this.position += remaining;

        // if we filled the buffer, push it
        if (this.position === this.buffer.length) {
          this.out.push(this.buffer);
          this.buffer = null;
          this.position = 0;
        }

        // chop off the front and keep going
        data = data.subarray(remaining);
        continue;
      }

      // if it's too small to read the size value, just save it in the buffer and
      // we'll hopefully get to it the next time around
      if (data.length < 2) {
        this.buffer = Buffer.from(data);
        this.position = data.length;
        break;
      }

      // otherwise, read the size value, and if it's bigger than the size of the
      // data we have, we should save it in the buffer
      const size = data.readUInt16LE(0);
      if (size > data.length) {
        this.buffer = Buffer.alloc(size);
        data.copy(this.buffer);
        this.position = data.length;
        break;
      }

      // otherwise, just push it and chop off the front, then keep going
      this.out.push(data.subarray(0, size));
      data = data.subarray(size);
    }
  }

  read() {
    return this.out.shift();
  }
}
