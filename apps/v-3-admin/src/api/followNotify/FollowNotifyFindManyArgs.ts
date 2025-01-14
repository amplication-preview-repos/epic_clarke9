import { FollowNotifyWhereInput } from "./FollowNotifyWhereInput";
import { FollowNotifyOrderByInput } from "./FollowNotifyOrderByInput";

export type FollowNotifyFindManyArgs = {
  where?: FollowNotifyWhereInput;
  orderBy?: Array<FollowNotifyOrderByInput>;
  skip?: number;
  take?: number;
};
