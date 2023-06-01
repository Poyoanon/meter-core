// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTTroopMemberUpdateMinNotify = {
  position: bigint;
  maxHp: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk0_m: number;
  curHp: bigint;
  characterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTTroopMemberUpdateMinNotify;
  data.position = reader.u64();
  data.maxHp = ReadNBytesInt64.read(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk0_m = reader.u32();
  data.curHp = ReadNBytesInt64.read(reader);
  data.characterId = reader.u64();
  return data;
}
export const name = "PKTTroopMemberUpdateMinNotify";
export const opcode = 51633;
