import { UserCreateNestedManyWithoutReferralCodesInput } from "./UserCreateNestedManyWithoutReferralCodesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralCodeCreateInput = {
  code: string;
  createdById?: string | null;
  isActive: boolean;
  isDeleted: boolean;
  referrals?: UserCreateNestedManyWithoutReferralCodesInput;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
