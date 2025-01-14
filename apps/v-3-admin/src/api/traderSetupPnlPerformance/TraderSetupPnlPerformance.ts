import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type TraderSetupPnlPerformance = {
  createdAt: Date | null;
  estimatedPnl: number | null;
  estimatedPnlRate: number | null;
  feeRate: number | null;
  id: string;
  pnl: number | null;
  pnlRate: number | null;
  rR: number | null;
  setup?: Setup;
  trader?: User | null;
  updatedAt: Date | null;
};
