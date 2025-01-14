import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type CoinWhereInput = {
  code?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  isDeleted?: BooleanFilter;
  isFutures?: BooleanFilter;
  isSpot?: BooleanFilter;
  name?: StringFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
