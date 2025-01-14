import { Team } from "../team/Team";
import { User } from "../user/User";

export type TeamTrader = {
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  teams?: Team;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User;
};
