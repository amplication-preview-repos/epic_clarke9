import { UserSubscriptionWhereInput } from "./UserSubscriptionWhereInput";
import { UserSubscriptionOrderByInput } from "./UserSubscriptionOrderByInput";

export type UserSubscriptionFindManyArgs = {
  where?: UserSubscriptionWhereInput;
  orderBy?: Array<UserSubscriptionOrderByInput>;
  skip?: number;
  take?: number;
};
