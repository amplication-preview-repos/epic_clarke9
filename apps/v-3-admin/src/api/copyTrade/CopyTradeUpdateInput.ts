import { CopyTradeOrderUpdateManyWithoutCopyTradesInput } from "./CopyTradeOrderUpdateManyWithoutCopyTradesInput";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CopyTradeUpdateInput = {
  activatedAt?: Date | null;
  assetSize?: number | null;
  copiedAt?: Date | null;
  copyTradeOrder?: CopyTradeOrderUpdateManyWithoutCopyTradesInput;
  createdById?: string | null;
  errorMessage?: string | null;
  errorNo?: string | null;
  isDeleted?: boolean;
  market?: string | null;
  realizedPnl?: number | null;
  realizedR?: number | null;
  setup?: SetupWhereUniqueInput | null;
  state?: string | null;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  usdSize?: number | null;
  user?: UserWhereUniqueInput | null;
};
