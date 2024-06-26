export enum ApiStatType {
  CRIT,
  SPEC,
  SWIFT,
  EXP,
  ATKPOWER,
  SKILLDMG,
}

export type CharacterExportInfo = {
  name: string;
  stats: { id: ApiStatType; value: number }[];
};
