import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClapCreateInput = {
  createdById?: string | null;
  isDeleted: boolean;
  setup?: SetupWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
};
