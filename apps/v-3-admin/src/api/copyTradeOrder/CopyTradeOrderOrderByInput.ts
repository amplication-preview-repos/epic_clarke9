import { SortOrder } from "../../util/SortOrder";

export type CopyTradeOrderOrderByInput = {
  actPx?: SortOrder;
  actSz?: SortOrder;
  copyTradeId?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  percentage?: SortOrder;
  requestPx?: SortOrder;
  requestSz?: SortOrder;
  requestedAt?: SortOrder;
  setupId?: SortOrder;
  side?: SortOrder;
  status?: SortOrder;
  statusAt?: SortOrder;
  statusMessage?: SortOrder;
  stopLossPx?: SortOrder;
  takeProfitPx?: SortOrder;
  tpValue?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  userId?: SortOrder;
};
