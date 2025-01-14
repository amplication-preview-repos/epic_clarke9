import { FollowNotify as TFollowNotify } from "../api/followNotify/FollowNotify";

export const FOLLOWNOTIFY_TITLE_FIELD = "createdById";

export const FollowNotifyTitle = (record: TFollowNotify): string => {
  return record.createdById?.toString() || String(record.id);
};
