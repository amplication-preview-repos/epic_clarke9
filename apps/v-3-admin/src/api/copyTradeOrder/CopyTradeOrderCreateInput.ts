import { CopyTradeWhereUniqueInput } from "../copyTrade/CopyTradeWhereUniqueInput";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CopyTradeOrderCreateInput = {
  actPx?: number | null;
  actSz?: number | null;
  copyTrades?: CopyTradeWhereUniqueInput | null;
  createdById?: string | null;
  isDeleted: boolean;
  percentage?: number | null;
  requestPx?: number | null;
  requestSz?: number | null;
  requestedAt?: Date | null;
  setup?: SetupWhereUniqueInput | null;
  side: string;
  status: string;
  statusAt?: Date | null;
  statusMessage?: string | null;
  stopLossPx?: number | null;
  takeProfitPx?: number | null;
  tpValue: string;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
};
