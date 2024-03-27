// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  targetId: bigint;
  type: number;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  data.targetId = reader.u64();
  reader.skip(1);
  data.type = reader.u32();
  reader.skip(2);
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 32191;
