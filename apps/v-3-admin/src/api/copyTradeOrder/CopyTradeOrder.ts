import { CopyTrade } from "../copyTrade/CopyTrade";
import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type CopyTradeOrder = {
  actPx: number | null;
  actSz: number | null;
  copyTrades?: CopyTrade | null;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  percentage: number | null;
  requestPx: number | null;
  requestSz: number | null;
  requestedAt: Date | null;
  setup?: Setup | null;
  side: string;
  status: string;
  statusAt: Date | null;
  statusMessage: string | null;
  stopLossPx: number | null;
  takeProfitPx: number | null;
  tpValue: string;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User | null;
};
