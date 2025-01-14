import { SortOrder } from "../../util/SortOrder";

export type FollowNotifyOrderByInput = {
  block?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  follow?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  notify?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  userId?: SortOrder;
};
