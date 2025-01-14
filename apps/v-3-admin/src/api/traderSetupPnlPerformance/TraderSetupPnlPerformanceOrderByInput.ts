import { SortOrder } from "../../util/SortOrder";

export type TraderSetupPnlPerformanceOrderByInput = {
  createdAt?: SortOrder;
  estimatedPnl?: SortOrder;
  estimatedPnlRate?: SortOrder;
  feeRate?: SortOrder;
  id?: SortOrder;
  pnl?: SortOrder;
  pnlRate?: SortOrder;
  rR?: SortOrder;
  setupId?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
};
