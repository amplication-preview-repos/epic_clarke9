import { CoinWhereUniqueInput } from "./CoinWhereUniqueInput";
import { CoinUpdateInput } from "./CoinUpdateInput";

export type UpdateCoinArgs = {
  where: CoinWhereUniqueInput;
  data: CoinUpdateInput;
};
