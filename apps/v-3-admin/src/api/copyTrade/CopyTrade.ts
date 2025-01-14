import { CopyTradeOrder } from "../copyTradeOrder/CopyTradeOrder";
import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type CopyTrade = {
  activatedAt: Date | null;
  assetSize: number | null;
  copiedAt: Date | null;
  copyTradeOrder?: Array<CopyTradeOrder>;
  createdAt: Date | null;
  createdById: string | null;
  errorMessage: string | null;
  errorNo: string | null;
  id: string;
  isDeleted: boolean;
  market: string | null;
  realizedPnl: number | null;
  realizedR: number | null;
  setup?: Setup | null;
  state: string | null;
  trader?: User | null;
  updatedAt: Date | null;
  updatedById: string | null;
  usdSize: number | null;
  user?: User | null;
};
