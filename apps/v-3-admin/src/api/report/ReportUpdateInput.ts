import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  content?: string;
  createdById?: string | null;
  isDeleted?: boolean;
  setup?: SetupWhereUniqueInput | null;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
};
