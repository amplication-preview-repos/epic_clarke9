import { UserSubscriptionWhereUniqueInput } from "../userSubscription/UserSubscriptionWhereUniqueInput";

export type SubscriptionPoolCreateInput = {
  amount?: number | null;
  cancellationDate?: Date | null;
  createdById?: string | null;
  isCancelled: boolean;
  isDeleted: boolean;
  isPaid: boolean;
  isWithdrawal: boolean;
  paidDate?: Date | null;
  traderEarnDate?: Date | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  userSubscription?: UserSubscriptionWhereUniqueInput | null;
  withdrawalDate?: Date | null;
};
