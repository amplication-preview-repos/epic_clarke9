import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderProfileWhereInput = {
  content?: StringNullableFilter;
  coverImage?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  links?: JsonFilter;
  trader?: UserWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
