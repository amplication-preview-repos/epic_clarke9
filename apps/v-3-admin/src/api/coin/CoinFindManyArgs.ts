import { CoinWhereInput } from "./CoinWhereInput";
import { CoinOrderByInput } from "./CoinOrderByInput";

export type CoinFindManyArgs = {
  where?: CoinWhereInput;
  orderBy?: Array<CoinOrderByInput>;
  skip?: number;
  take?: number;
};
