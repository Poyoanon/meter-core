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
  reader.skip(1);
  data.targetId = reader.u64();
  reader.skip(1);
  data.type = reader.u32();
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 40936;
