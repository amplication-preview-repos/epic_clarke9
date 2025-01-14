import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  createdAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  hash?: StringFilter;
  id?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
