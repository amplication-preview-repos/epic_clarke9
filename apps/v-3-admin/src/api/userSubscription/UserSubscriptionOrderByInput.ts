import { SortOrder } from "../../util/SortOrder";

export type UserSubscriptionOrderByInput = {
  autoRenewProductCode?: SortOrder;
  autoRenewStatus?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  currency?: SortOrder;
  data?: SortOrder;
  expireDate?: SortOrder;
  id?: SortOrder;
  isCancelled?: SortOrder;
  isDeleted?: SortOrder;
  isExpired?: SortOrder;
  isPaymentReceived?: SortOrder;
  isTrial?: SortOrder;
  market?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  rawData?: SortOrder;
  startDate?: SortOrder;
  traderId?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  userId?: SortOrder;
};
