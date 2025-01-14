import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AdWhereInput = {
  adsGroupId?: StringFilter;
  adsId?: StringFilter;
  campaign?: StringNullableFilter;
  company?: StringNullableFilter;
  content?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  endDate?: DateTimeFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  isDeleted?: BooleanFilter;
  lang?: StringFilter;
  pages?: StringNullableFilter;
  sortNo?: IntNullableFilter;
  startDate?: DateTimeFilter;
  title?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  url?: StringNullableFilter;
  video?: StringNullableFilter;
};
