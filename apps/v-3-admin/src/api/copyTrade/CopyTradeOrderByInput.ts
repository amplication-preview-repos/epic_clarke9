import { SortOrder } from "../../util/SortOrder";

export type CopyTradeOrderByInput = {
  activatedAt?: SortOrder;
  assetSize?: SortOrder;
  copiedAt?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  errorMessage?: SortOrder;
  errorNo?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  market?: SortOrder;
  realizedPnl?: SortOrder;
  realizedR?: SortOrder;
  setupId?: SortOrder;
  state?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  usdSize?: SortOrder;
  userId?: SortOrder;
};
