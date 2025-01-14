import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderSuspensionUpdateInput = {
  createdById?: string | null;
  isDeleted?: boolean;
  suspensionEndDate?: Date | null;
  suspensionStartDate?: Date | null;
  trader?: UserWhereUniqueInput;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
