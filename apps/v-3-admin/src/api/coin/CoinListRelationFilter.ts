import { CoinWhereInput } from "./CoinWhereInput";

export type CoinListRelationFilter = {
  every?: CoinWhereInput;
  some?: CoinWhereInput;
  none?: CoinWhereInput;
};
