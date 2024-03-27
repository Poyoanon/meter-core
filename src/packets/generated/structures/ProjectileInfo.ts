// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as TripodIndex from "../../common/TripodIndex";
import * as TripodLevel from "../../common/TripodLevel";
export type ProjectileInfo = {
  tripodIndex: TripodIndex.TripodIndex;
  skillLevel: number;
  unk2: number;
  unk3: bigint;
  projectileId: bigint;
  unk5: number;
  skillEffect: number;
  unk7: number;
  unk8: bigint;
  struct_342?: Buffer;
  ownerId: bigint;
  unk12: number;
  unk13: number;
  unk14: number;
  unk16_0?: bigint;
  skillId: number;
  unk19_0?: number;
  unk20: number;
  chainSkillEffect: number;
  targetObjectId: bigint;
  tripodLevel: TripodLevel.TripodLevel;
};
export function read(reader: Read) {
  const data = {} as ProjectileInfo;
  data.tripodIndex = TripodIndex.read(reader);
  data.skillLevel = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u64();
  data.projectileId = reader.u64();
  data.unk5 = reader.u16();
  data.skillEffect = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  if (reader.bool()) data.struct_342 = reader.bytes(reader.u16(), 11, 9);
  data.ownerId = reader.u64();
  data.unk12 = reader.u8();
  data.unk13 = reader.u32();
  data.unk14 = reader.u16();
  if (reader.bool()) data.unk16_0 = reader.u64();
  data.skillId = reader.u32();
  if (reader.bool()) data.unk19_0 = reader.u32();
  data.unk20 = reader.u8();
  data.chainSkillEffect = reader.u32();
  data.targetObjectId = reader.u64();
  data.tripodLevel = TripodLevel.read(reader);
  return data;
}
