// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_595: string;
  playerId: bigint;
  unk5: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_30: { struct_578: string; struct_595: string; versionString: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.unk0 = reader.u32();
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_595 = reader.string(128);
  data.playerId = reader.u64();
  data.unk5 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_578: string; struct_595: string; versionString: string };
      i.struct_578 = reader.string(32);
      i.struct_595 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 16937;
