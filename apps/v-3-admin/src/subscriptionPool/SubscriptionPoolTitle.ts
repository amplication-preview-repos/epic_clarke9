import { SubscriptionPool as TSubscriptionPool } from "../api/subscriptionPool/SubscriptionPool";

export const SUBSCRIPTIONPOOL_TITLE_FIELD = "createdById";

export const SubscriptionPoolTitle = (record: TSubscriptionPool): string => {
  return record.createdById?.toString() || String(record.id);
};
