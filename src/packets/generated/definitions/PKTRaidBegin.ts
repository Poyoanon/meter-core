// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk1_m: boolean;
  raidResult: number;
  unk5_m: bigint;
  raidId: number;
  unk4_m: bigint;
  totalTime: bigint;
  unk11_m: boolean;
  bossKillDataList: BossKillData.BossKillData[];
  endTick: bigint;
  unk6_m: bigint;
  startTick: bigint;
  initBraveHeartCount: number;
  unk0_m: boolean;
  braveHeartCount: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk1_m = reader.bool();
  data.raidResult = reader.u8();
  data.unk5_m = reader.u64();
  data.raidId = reader.u32();
  data.unk4_m = reader.u64();
  data.totalTime = reader.u64();
  data.unk11_m = reader.bool();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.endTick = reader.u64();
  data.unk6_m = reader.u64();
  data.startTick = reader.u64();
  data.initBraveHeartCount = reader.u8();
  data.unk0_m = reader.bool();
  data.braveHeartCount = reader.u8();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 11710;