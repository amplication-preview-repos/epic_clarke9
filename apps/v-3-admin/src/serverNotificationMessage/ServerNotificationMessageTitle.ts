import { ServerNotificationMessage as TServerNotificationMessage } from "../api/serverNotificationMessage/ServerNotificationMessage";

export const SERVERNOTIFICATIONMESSAGE_TITLE_FIELD = "createdById";

export const ServerNotificationMessageTitle = (
  record: TServerNotificationMessage
): string => {
  return record.createdById?.toString() || String(record.id);
};
