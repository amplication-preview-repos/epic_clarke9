import { CopyTradeOrderWhereInput } from "./CopyTradeOrderWhereInput";
import { CopyTradeOrderOrderByInput } from "./CopyTradeOrderOrderByInput";

export type CopyTradeOrderFindManyArgs = {
  where?: CopyTradeOrderWhereInput;
  orderBy?: Array<CopyTradeOrderOrderByInput>;
  skip?: number;
  take?: number;
};
