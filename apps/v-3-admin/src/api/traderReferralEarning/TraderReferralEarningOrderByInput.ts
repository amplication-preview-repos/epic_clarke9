import { SortOrder } from "../../util/SortOrder";

export type TraderReferralEarningOrderByInput = {
  amount?: SortOrder;
  cancellationDate?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  installment?: SortOrder;
  installments?: SortOrder;
  isCancelled?: SortOrder;
  isDeleted?: SortOrder;
  isPaid?: SortOrder;
  isWithdrawal?: SortOrder;
  paidDate?: SortOrder;
  traderEarnDate?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  traderId?: SortOrder;
  subscriptionId?: SortOrder;
  withdrawalDate?: SortOrder;
};
