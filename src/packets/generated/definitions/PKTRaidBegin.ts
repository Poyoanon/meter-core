// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  initBraveHeartCount: number;
  startTick: bigint;
  endTick: bigint;
  braveHeartCount: number;
  unk1_m: boolean;
  unk6_m: bigint;
  unk4_m: bigint;
  raidResult: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk11_m: boolean;
  unk0_m: boolean;
  totalTime: bigint;
  unk5_m: bigint;
  raidId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.initBraveHeartCount = reader.u8();
  data.startTick = reader.u64();
  data.endTick = reader.u64();
  data.braveHeartCount = reader.u8();
  data.unk1_m = reader.bool();
  data.unk6_m = reader.u64();
  data.unk4_m = reader.u64();
  data.raidResult = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk11_m = reader.bool();
  data.unk0_m = reader.bool();
  data.totalTime = reader.u64();
  data.unk5_m = reader.u64();
  data.raidId = reader.u32();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 46280;
