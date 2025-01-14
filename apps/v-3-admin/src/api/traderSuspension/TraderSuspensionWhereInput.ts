import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderSuspensionWhereInput = {
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  suspensionEndDate?: DateTimeNullableFilter;
  suspensionStartDate?: DateTimeNullableFilter;
  trader?: UserWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
