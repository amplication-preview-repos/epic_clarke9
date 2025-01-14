import { User } from "../user/User";

export type TraderStat = {
  id: string;
  monthlyPnl: number | null;
  monthlyPnlRate: number | null;
  monthlyR: number | null;
  monthlyRoi: number | null;
  monthlyWinRate: number | null;
  pnl: number | null;
  pnlRate: number | null;
  rate: number | null;
  riskScore: number | null;
  statAt: Date | null;
  trader?: User;
  winRate: number | null;
};
