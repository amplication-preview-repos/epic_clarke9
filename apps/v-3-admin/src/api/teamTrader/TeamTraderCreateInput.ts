import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamTraderCreateInput = {
  createdById?: string | null;
  isDeleted: boolean;
  teams: TeamWhereUniqueInput;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user: UserWhereUniqueInput;
};
