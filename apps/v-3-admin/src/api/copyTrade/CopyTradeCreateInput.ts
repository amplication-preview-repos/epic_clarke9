import { CopyTradeOrderCreateNestedManyWithoutCopyTradesInput } from "./CopyTradeOrderCreateNestedManyWithoutCopyTradesInput";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CopyTradeCreateInput = {
  activatedAt?: Date | null;
  assetSize?: number | null;
  copiedAt?: Date | null;
  copyTradeOrder?: CopyTradeOrderCreateNestedManyWithoutCopyTradesInput;
  createdById?: string | null;
  errorMessage?: string | null;
  errorNo?: string | null;
  isDeleted: boolean;
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
