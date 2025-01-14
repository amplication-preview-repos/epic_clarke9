import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InviteeWhereInput = {
  activatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  market?: StringNullableFilter;
  uid?: StringNullableFilter;
};
