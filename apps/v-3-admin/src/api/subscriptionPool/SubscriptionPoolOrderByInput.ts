import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPoolOrderByInput = {
  amount?: SortOrder;
  cancellationDate?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isCancelled?: SortOrder;
  isDeleted?: SortOrder;
  isPaid?: SortOrder;
  isWithdrawal?: SortOrder;
  paidDate?: SortOrder;
  traderEarnDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  subscriptionId?: SortOrder;
  withdrawalDate?: SortOrder;
};
