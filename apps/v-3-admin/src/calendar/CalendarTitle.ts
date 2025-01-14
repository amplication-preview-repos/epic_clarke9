import { Calendar as TCalendar } from "../api/calendar/Calendar";

export const CALENDAR_TITLE_FIELD = "title";

export const CalendarTitle = (record: TCalendar): string => {
  return record.title?.toString() || String(record.id);
};
