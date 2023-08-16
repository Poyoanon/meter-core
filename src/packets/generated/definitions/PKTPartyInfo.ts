// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as PartyMemberData from "../structures/PartyMemberData";
export type PKTPartyInfo = {
  partyLootType: number;
  lootGrade: number;
  memberDatas: PartyMemberData.PartyMemberData[];
  raidInstanceId: number;
  partyType: number;
  partyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyInfo;
  data.partyLootType = reader.u8();
  data.lootGrade = reader.u32();
  data.memberDatas = reader.array(reader.u16(), () => PartyMemberData.read(reader), 40);
  data.raidInstanceId = reader.u32();
  data.partyType = reader.u8();
  data.partyInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyInfo";
export const opcode = 51450;
