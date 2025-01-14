import { SubscriptionPoolWhereInput } from "./SubscriptionPoolWhereInput";
import { SubscriptionPoolOrderByInput } from "./SubscriptionPoolOrderByInput";

export type SubscriptionPoolFindManyArgs = {
  where?: SubscriptionPoolWhereInput;
  orderBy?: Array<SubscriptionPoolOrderByInput>;
  skip?: number;
  take?: number;
};
