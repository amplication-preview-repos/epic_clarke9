import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { NewsTextListRelationFilter } from "../newsText/NewsTextListRelationFilter";

export type NewsWhereInput = {
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  fullText?: StringNullableFilter;
  id?: StringFilter;
  imageURL?: StringNullableFilter;
  isDeleted?: BooleanFilter;
  newsText?: NewsTextListRelationFilter;
  newsURL?: StringNullableFilter;
  sentiment?: StringNullableFilter;
  sourceName?: StringNullableFilter;
  text?: StringNullableFilter;
  thumbnailURL?: StringNullableFilter;
  tickers?: StringFilter;
  title?: StringNullableFilter;
  topics?: StringFilter;
  typeField?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
