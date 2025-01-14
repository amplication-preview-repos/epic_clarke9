import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NewsWhereUniqueInput } from "../news/NewsWhereUniqueInput";

export type NewsTextWhereInput = {
  fullText?: StringNullableFilter;
  id?: StringFilter;
  language?: StringFilter;
  news?: NewsWhereUniqueInput;
  text?: StringNullableFilter;
  title?: StringNullableFilter;
};
