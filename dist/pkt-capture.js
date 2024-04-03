var M=Object.create;var l=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var U=(n,e)=>{for(var s in e)l(n,s,{get:e[s],enumerable:!0})},I=(n,e,s,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of R(e))!K.call(n,r)&&r!==s&&l(n,r,{get:()=>e[r],enumerable:!(t=N(e,r))||t.enumerable});return n};var W=(n,e,s)=>(s=n!=null?M(j(n)):{},I(e||!n||!n.__esModule?l(s,"default",{value:n,enumerable:!0}):s,n)),V=n=>I(l({},"__esModule",{value:!0}),n);var Z={};U(Z,{PktCaptureAll:()=>w,PktCaptureMode:()=>q,adminRelauncher:()=>D,deviceList:()=>$,findDevice:()=>z});module.exports=V(Z);var k=W(require("cap")),b=require("child_process"),P=require("net"),A=require("os"),S=require("raw-socket-sniffer"),x=require("tiny-typed-emitter");var d=require("stream");var O=require("stream"),y=65536,h=class extends O.EventEmitter{next_id=-1;stored={};track(e,s,t){if(this.next_id===-1&&this.set_current_id(s.info.id),Math.abs(this.next_id-s.info.id)>=10&&this.increment_id(),this.stored[s.info.id]={packet:e,ip:s,tcp:t},this.next_id in this.stored){let r=this.stored[this.next_id];for(;r!==void 0;)this.emit("segment",r.packet,r.ip,r.tcp),delete this.stored[this.next_id],this.increment_id(),r=this.stored[this.next_id]}console.log(s.info.id,this.next_id,s.info.id===this.next_id,Object.keys(this.stored))}increment_id(){this.next_id=(this.next_id+1)%y}set_current_id(e){this.next_id=e%y}set_next_id(e){this.next_id=(e+1)%y}};var p=class{buffer;position;out;constructor(){this.buffer=null,this.position=0,this.out=[]}write(e){for(;e.length>0;){if(this.buffer){if(this.buffer.length<2){let r=this.buffer[0],i=(e[0]<<8)+r;this.buffer=Buffer.alloc(i),this.buffer[0]=r,this.position=1}let t=Math.min(e.length,this.buffer.length-this.position);e.copy(this.buffer,this.position,0,t),this.position+=t,this.position===this.buffer.length&&(this.out.push(this.buffer),this.buffer=null,this.position=0),e=e.subarray(t);continue}if(e.length<2){this.buffer=Buffer.from(e),this.position=e.length;break}let s=e.readUInt16LE(0);if(s===0){this.buffer=null;return}if(s>e.length){this.buffer=Buffer.alloc(s),e.copy(this.buffer),this.position=e.length;break}this.out.push(e.subarray(0,s)),e=e.subarray(s)}}read(){return this.out.shift()}};var m=class extends d.EventEmitter{sessions;listen_options;constructor(e){super(),this.sessions={},this.listen_options=e,d.EventEmitter.call(this)}track_packet(e,s,t){let r=s.info.srcaddr+":"+t.info.srcport,i=s.info.dstaddr+":"+t.info.dstport,f;r<i?f=r+"-"+i:f=i+"-"+r;let c=!1,o=this.sessions[f];if(!o){if(!(t.info.flags&8)&&!(t.info.flags&2))return;c=!0,o=new u(this.listen_options),this.sessions[f]=o,o.on("end",()=>{delete this.sessions[f],console.info(`[meter-core/tcp-tracker] - Remove session ${o?.src}->${o?.dst} (Total: ${Object.keys(this.sessions).length})`)})}o.track(e,s,t),c&&this.emit("session",o)}},u=class extends d.EventEmitter{state;src;dst;send_seqno;send_buffers;recv_seqno;recv_buffers;listen_options;is_ignored;packetBuffer;send_ip_tracker;recv_ip_tracker;skip_socks5;in_handshake;constructor(e){super(),this.listen_options=e,this.state="NONE",this.send_seqno=0,this.send_buffers=[],this.recv_seqno=0,this.recv_buffers=[],this.is_ignored=!1,this.packetBuffer=new p,this.send_ip_tracker=new h,this.recv_ip_tracker=new h,this.send_ip_tracker.on("segment",this.handle_send_segment.bind(this)),this.recv_ip_tracker.on("segment",this.handle_recv_segment.bind(this)),this.skip_socks5=0,this.in_handshake=!0,d.EventEmitter.call(this)}track(e,s,t){let r=s.info.srcaddr+":"+t.info.srcport,i=s.info.dstaddr+":"+t.info.dstport;if(this.state==="NONE"){let f=C(s.info.srcaddr,this.listen_options),c=C(s.info.dstaddr,this.listen_options);f&&this.listen_options.port===t.info.dstport?(this.src=r,this.dst=i):this.listen_options.port===t.info.srcport&&c?(this.src=i,this.dst=r):!f&&!c?this.listen_options.port===t.info.dstport?(this.src=r,this.dst=i):this.listen_options.port===t.info.srcport?(this.src=i,this.dst=r):(this.src=r,this.dst=i,this.is_ignored=!0):(this.src=r,this.dst=i,this.is_ignored=!0),this.state="ESTAB"}t.info.flags&4||t.info.flags&1?(this.ESTAB(e,s,t),this.emit("end",this)):this.ESTAB(e,s,t)}ESTAB(e,s,t){if(this.is_ignored)return;let r=s.info.srcaddr+":"+t.info.srcport;r===this.src?this.handle_recv_segment(e,s,t):r===this.dst?this.handle_send_segment(e,s,t):console.error("[meter-core/tcp_tracker] - non-matching packet in session: ip="+s+"tcp="+t)}flush_buffers(e,s){if(s==="recv"){this.recv_seqno===0&&(this.recv_seqno=e);let t=u.get_flush(this.recv_buffers,this.recv_seqno,e);if(!t)return;if(this.recv_seqno=e,this.in_handshake&&t.length===2&&t.equals(Buffer.from([5,2]))&&(this.skip_socks5=4),this.skip_socks5>0){this.skip_socks5--;return}this.in_handshake=!1,this.packetBuffer.write(t);let r;for(;r=this.packetBuffer.read();)this.emit("payload_recv",r)}}static get_flush(e,s,t){let r=t-s;if(r<=0)return null;let i=Buffer.alloc(r),f=Buffer.alloc(r),c=e.filter(o=>{if(o.seqno>t)return!0;if(o.seqno<s){if(o.seqno+o.payload.length<s)return!1;o.payload=o.payload.subarray(s-o.seqno),o.seqno=s}let v=o.seqno-s,a=Math.min(t-o.seqno,o.payload.length);return o.payload.copy(i,v,0,a),f.fill(1,v,v+a),a<o.payload.length?(o.payload=o.payload.subarray(a),o.seqno+=a,!0):!1});return f.includes(0)?e.length>=50?(console.warn(`[meter-core/tcp_tracker] - Dropped ${r} bytes`),Buffer.alloc(0)):null:(e.length=0,e.push(...c),i)}handle_recv_segment(e,s,t){let r=s.info.totallen-s.hdrlen-t.hdrlen,i=!1;try{i=T(e,s,t)}catch(f){console.error(f);return}r>0&&this.send_buffers.push({seqno:t.info.seqno,payload:Buffer.from(e.subarray(t.offset,t.offset+r))}),t.info.ackno&&!i&&this.flush_buffers(t.info.ackno??0,"recv")}handle_send_segment(e,s,t){let r=s.info.totallen-s.hdrlen-t.hdrlen,i=!1;try{i=T(e,s,t)}catch(f){console.error(f);return}r>0&&this.recv_buffers.push({seqno:t.info.seqno,payload:Buffer.from(e.subarray(t.offset,t.offset+r))}),t.info.ackno&&!i&&this.flush_buffers(t.info.ackno??0,"send")}};function T(n,e,s){if(s.hdrlen==20)return!1;let t=e.offset+20,r=s.hdrlen-20,i=t+r;for(;t<i;)switch(n[t]){case 0:t=i;break;case 1:t+=1;break;case 2:t+=4;break;case 3:t+=3;break;case 4:t+=2;break;case 5:return!0;case 8:t+=10;break;case 254:case 255:t+=n[t+1]??1;break;default:throw new Error(`[meter-core/tcp-tracker] - Unknown TCPOption ${n[t]}, packet is probably malformed, should drop.`)}return!1}function g(n){var e=n.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);return e&&e.length===5?(+e[1]<<24)+(+e[2]<<16)+(+e[3]<<8)+ +e[4]:null}function C(n,e){let s=g(n),t=g(e.ip),r=g(e.mask);return!s||!t||!r?!1:(s&r)===(t&r)}var{findDevice:z,deviceList:$}=k.default.Cap,{Ethernet:H,PROTOCOL:L,IPV4:G,TCP:X}=k.default.decoders;var _=class extends x.TypedEmitter{tcpTracker;device;port;constructor(e,s){super(),this.device=e,this.port=s.port,this.tcpTracker=new m(s),this.tcpTracker.on("session",t=>{console.info(`[meter-core/pkt-capture] - New session ${t.src}->${t.dst} ${t.is_ignored?"(ingored) ":""}(Total: ${Object.keys(this.tcpTracker.sessions).length})`),t.on("payload_recv",r=>{this.emit("packet",r)}),t.dst&&this.emit("connect",t.dst)})}dispatchPacket(e){let s=H(e);if(s.info.type===L.ETHERNET.IPV4){let t=G(e,s.offset);if(t.info.protocol===L.IP.TCP){let r=X(e,t.offset);this.tcpTracker.track_packet(e,t,r)}}}},B=class extends _{c;#e;constructor(e,s){super(e,s),this.c=new k.default.Cap,this.#e=Buffer.alloc(65535)}listen(){let e=this.c.open(this.device,`tcp and (src port ${this.port} or dst port ${this.port})`,10485760,this.#e);this.c.setMinBytes&&this.c.setMinBytes(54),this.c.on("packet",(s,t)=>{if(e==="ETHERNET")this.dispatchPacket(this.#e);else if(e==="NULL"&&this.device==="\\Device\\NPF_Loopback"){if(this.#e.readUInt32LE()!==2)return;this.dispatchPacket(this.#e.subarray(4))}})}close(){this.c.close()}},E=class extends _{rs;constructor(e,s){super(e,s),this.rs=new S.RawSocket(e,s.port)}listen(){this.rs.on("data",this.dispatchPacket.bind(this)),this.rs.listen()}close(){}},q=(s=>(s[s.MODE_PCAP=0]="MODE_PCAP",s[s.MODE_RAW_SOCKET=1]="MODE_RAW_SOCKET",s))(q||{}),w=class extends x.TypedEmitter{captures;constructor(e,s=6040){if(super(),this.captures=new Map,D(e)||(console.warn("[meter-core/PktCaptureAll] - Couldn't restart as admin, fallback to pcap mode, consider starting as admin yourself."),e=0),e===1&&J(),e===0){for(let t of $())for(let r of t.addresses)if(r.addr&&r.netmask&&(0,P.isIPv4)(r.addr))try{let i=new B(t.name,{ip:r.addr,mask:r.netmask,port:s});i.on("packet",f=>this.emit("packet",f,t.name)),i.on("connect",f=>this.emit("connect",f,t.name)),this.captures.set(t.name,i),i.listen()}catch(i){console.error(`[meter-core/PktCaptureAll] ${i}`)}}else if(e===1){for(let t of Object.values((0,A.networkInterfaces)()))for(let r of t??[])if((0,P.isIPv4)(r.address)&&r.family==="IPv4"&&r.internal===!1&&!this.captures.has(r.address))try{let i=new E(r.address,{ip:r.address,mask:r.netmask,port:s});i.on("packet",f=>this.emit("packet",f,r.address)),this.captures.set(r.address,i),i.listen()}catch(i){console.error(`[meter-core/PktCaptureAll] ${i}`)}}}close(){for(let e of this.captures.values())e.close()}};function J(){let n=`netsh advfirewall firewall delete rule name="lost-ark-dev" & netsh advfirewall firewall add rule name="lost-ark-dev" dir=in action=allow program="${process.argv[0]}"`;(0,b.execSync)(n,{stdio:"inherit"})}function Q(n){let e=n.filter(s=>s!=="");return e.length===0?"'-relaunch'":"'"+e.join("','")+"','-relaunch'"}function Y(){try{(0,b.execSync)(`fsutil dirty query ${process.env.systemdrive??"c:"}`)}catch{return!1}return!0}function D(n){if(n!==1||process.argv.includes("-relaunch")||Y())return!0;let e=`cmd /c "powershell -Command Start-Process -FilePath '${process.argv[0]}' -Verb RunAs -ArgumentList ${Q(process.argv.splice(1))}"`;try{(0,b.execSync)(e,{stdio:"inherit"})}catch(s){return console.info(`[meter-core/pkt-capture] - ${s}`),!1}process.exit(0)}0&&(module.exports={PktCaptureAll,PktCaptureMode,adminRelauncher,deviceList,findDevice});
