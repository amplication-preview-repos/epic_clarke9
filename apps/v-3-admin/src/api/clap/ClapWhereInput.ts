import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClapWhereInput = {
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  setup?: SetupWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
