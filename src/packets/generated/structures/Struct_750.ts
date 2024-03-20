// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_750 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: Buffer;
  unk6: number;
  struct_102: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_750;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u16();
  data.unk3 = reader.u8();
  data.unk4 = reader.u16();
  data.unk5 = reader.bytes(3);
  data.unk6 = reader.u16();
  data.struct_102 = reader.bytes(reader.u32(), 51);
  return data;
}
