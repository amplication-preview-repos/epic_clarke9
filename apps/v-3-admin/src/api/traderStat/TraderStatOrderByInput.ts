import { SortOrder } from "../../util/SortOrder";

export type TraderStatOrderByInput = {
  id?: SortOrder;
  monthlyPnl?: SortOrder;
  monthlyPnlRate?: SortOrder;
  monthlyR?: SortOrder;
  monthlyRoi?: SortOrder;
  monthlyWinRate?: SortOrder;
  pnl?: SortOrder;
  pnlRate?: SortOrder;
  rate?: SortOrder;
  riskScore?: SortOrder;
  statAt?: SortOrder;
  traderId?: SortOrder;
  winRate?: SortOrder;
};
