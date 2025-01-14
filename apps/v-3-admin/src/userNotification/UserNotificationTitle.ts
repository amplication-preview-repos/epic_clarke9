import { UserNotification as TUserNotification } from "../api/userNotification/UserNotification";

export const USERNOTIFICATION_TITLE_FIELD = "columnValue";

export const UserNotificationTitle = (record: TUserNotification): string => {
  return record.columnValue?.toString() || String(record.id);
};
