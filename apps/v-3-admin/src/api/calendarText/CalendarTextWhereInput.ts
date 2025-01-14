import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CalendarTextWhereInput = {
  acroExpand?: StringNullableFilter;
  alsoCalled?: StringNullableFilter;
  calendar?: CalendarWhereUniqueInput;
  ccNotes?: StringNullableFilter;
  ccNotice?: StringNullableFilter;
  country?: StringNullableFilter;
  derivedVia?: StringNullableFilter;
  description?: StringNullableFilter;
  frequency?: StringNullableFilter;
  id?: StringFilter;
  language?: StringFilter;
  measures?: StringNullableFilter;
  source?: StringNullableFilter;
  speaker?: StringNullableFilter;
  title?: StringNullableFilter;
  usualEffect?: StringNullableFilter;
  whyTraderscare?: StringNullableFilter;
};
