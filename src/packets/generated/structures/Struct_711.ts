// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as EquipItemData from "../structures/EquipItemData";
<<<<<<<< HEAD:src/packets/generated/structures/Struct_711.ts
export type Struct_711 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk5: number;
  lostArkString: string;
  lookData: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_711;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk5 = reader.u16();
  data.lostArkString = reader.string(20);
  data.lookData = reader.bytes(reader.u32(), 512);
========
export type Struct_730 = {
  unk0: number;
  lookData: Buffer;
  lostArkString: string;
  unk3: number;
  unk4: bigint;
  unk5: bigint;
  unk6: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk8: number;
};
export function read(reader: Read) {
  const data = {} as Struct_730;
  data.unk0 = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  data.unk3 = reader.u16();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk8 = reader.u8();
>>>>>>>> b399fbe696f7fdf30b085192606ab14f1702e1ca:src/packets/generated/structures/Struct_730.ts
  return data;
}
