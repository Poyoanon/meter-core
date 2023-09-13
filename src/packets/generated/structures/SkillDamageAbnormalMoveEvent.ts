// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as SkillMoveOptionData from "../../common/SkillMoveOptionData";
import * as SkillDamageEvent from "../structures/SkillDamageEvent";
import * as Vector3F from "../../common/Vector3F";
export type SkillDamageAbnormalMoveEvent = {
  unk4_m: number;
  destination: Vector3F.Vector3F;
  unk8_m: number;
  unk3_m: number;
  skillMoveOptionData: SkillMoveOptionData.SkillMoveOptionData;
  unk2_m: bigint;
  unk1_m: number;
  skillDamageEvent: SkillDamageEvent.SkillDamageEvent;
  position: Vector3F.Vector3F;
};
export function read(reader: Read) {
  const data = {} as SkillDamageAbnormalMoveEvent;
  data.unk4_m = reader.u16();
  data.destination = Vector3F.read(reader);
  data.unk8_m = reader.u16();
  data.unk3_m = reader.u16();
  data.skillMoveOptionData = SkillMoveOptionData.read(reader);
  data.unk2_m = reader.u64();
  data.unk1_m = reader.u8();
  data.skillDamageEvent = SkillDamageEvent.read(reader);
  data.position = Vector3F.read(reader);
  return data;
}
