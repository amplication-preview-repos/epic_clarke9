import { UserUpdateManyWithoutReferralCodesInput } from "./UserUpdateManyWithoutReferralCodesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralCodeUpdateInput = {
  code?: string;
  createdById?: string | null;
  isActive?: boolean;
  isDeleted?: boolean;
  referrals?: UserUpdateManyWithoutReferralCodesInput;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
