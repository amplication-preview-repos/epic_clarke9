import { SortOrder } from "../../util/SortOrder";

export type UserNotificationOrderByInput = {
  columnValue?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  messageId?: SortOrder;
  setupId?: SortOrder;
  traderId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  updatedColumn?: SortOrder;
  userId?: SortOrder;
};
