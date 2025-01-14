import { Calendar } from "../calendar/Calendar";

export type CalendarText = {
  acroExpand: string | null;
  alsoCalled: string | null;
  calendar?: Calendar;
  ccNotes: string | null;
  ccNotice: string | null;
  country: string | null;
  derivedVia: string | null;
  description: string | null;
  frequency: string | null;
  id: string;
  language: string;
  measures: string | null;
  source: string | null;
  speaker: string | null;
  title: string | null;
  usualEffect: string | null;
  whyTraderscare: string | null;
};
