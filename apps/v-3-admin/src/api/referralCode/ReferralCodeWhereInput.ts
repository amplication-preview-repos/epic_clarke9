import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReferralCodeWhereInput = {
  code?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isDeleted?: BooleanFilter;
  referrals?: UserListRelationFilter;
  trader?: UserWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
