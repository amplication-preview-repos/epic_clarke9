import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowNotifyWhereInput = {
  block?: BooleanFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  follow?: BooleanFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  notify?: BooleanFilter;
  trader?: UserWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
