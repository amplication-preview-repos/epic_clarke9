import { CanUpdate as TCanUpdate } from "../api/canUpdate/CanUpdate";

export const CANUPDATE_TITLE_FIELD = "title";

export const CanUpdateTitle = (record: TCanUpdate): string => {
  return record.title?.toString() || String(record.id);
};
