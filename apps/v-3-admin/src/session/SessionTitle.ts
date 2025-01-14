import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "hash";

export const SessionTitle = (record: TSession): string => {
  return record.hash?.toString() || String(record.id);
};
