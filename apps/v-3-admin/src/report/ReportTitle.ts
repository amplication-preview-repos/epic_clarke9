import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "content";

export const ReportTitle = (record: TReport): string => {
  return record.content?.toString() || String(record.id);
};
