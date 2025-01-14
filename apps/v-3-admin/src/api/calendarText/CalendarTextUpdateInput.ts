import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";

export type CalendarTextUpdateInput = {
  acroExpand?: string | null;
  alsoCalled?: string | null;
  calendar?: CalendarWhereUniqueInput;
  ccNotes?: string | null;
  ccNotice?: string | null;
  country?: string | null;
  derivedVia?: string | null;
  description?: string | null;
  frequency?: string | null;
  language?: string;
  measures?: string | null;
  source?: string | null;
  speaker?: string | null;
  title?: string | null;
  usualEffect?: string | null;
  whyTraderscare?: string | null;
};
