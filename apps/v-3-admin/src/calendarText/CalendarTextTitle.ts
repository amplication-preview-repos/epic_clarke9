import { CalendarText as TCalendarText } from "../api/calendarText/CalendarText";

export const CALENDARTEXT_TITLE_FIELD = "title";

export const CalendarTextTitle = (record: TCalendarText): string => {
  return record.title?.toString() || String(record.id);
};
