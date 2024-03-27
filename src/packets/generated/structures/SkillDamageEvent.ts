// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type SkillDamageEvent = {
  maxHp: bigint;
  damageType: number;
  damage: bigint;
  unk3_m: number;
  curHp: bigint;
  targetId: bigint;
  modifier: number;
  damageAttr?: number;
};
export function read(reader: Read) {
  const data = {} as SkillDamageEvent;
  data.maxHp = ReadNBytesInt64.read(reader);
  data.damageType = reader.u8();
  data.damage = ReadNBytesInt64.read(reader);
  data.unk3_m = reader.u16();
  data.curHp = ReadNBytesInt64.read(reader);
  data.targetId = reader.u64();
  data.modifier = reader.u8();
  if (reader.bool()) data.damageAttr = reader.u8();
  return data;
}
