import { SortOrder } from "../../util/SortOrder";

export type ServerNotificationMessageOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  message?: SortOrder;
  messageJson?: SortOrder;
  notificationId?: SortOrder;
  notificationType?: SortOrder;
  provider?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
