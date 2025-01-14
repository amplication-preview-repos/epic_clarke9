import { UserSubscription as TUserSubscription } from "../api/userSubscription/UserSubscription";

export const USERSUBSCRIPTION_TITLE_FIELD = "autoRenewProductCode";

export const UserSubscriptionTitle = (record: TUserSubscription): string => {
  return record.autoRenewProductCode?.toString() || String(record.id);
};
