import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderSetupPnlPerformanceCreateInput = {
  estimatedPnl?: number | null;
  estimatedPnlRate?: number | null;
  feeRate?: number | null;
  pnl?: number | null;
  pnlRate?: number | null;
  rR?: number | null;
  setup: SetupWhereUniqueInput;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
};
