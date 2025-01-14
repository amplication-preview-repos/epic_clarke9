import { UserSubscription } from "../userSubscription/UserSubscription";

export type SubscriptionPool = {
  amount: number | null;
  cancellationDate: Date | null;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isCancelled: boolean;
  isDeleted: boolean;
  isPaid: boolean;
  isWithdrawal: boolean;
  paidDate: Date | null;
  traderEarnDate: Date | null;
  updatedAt: Date | null;
  updatedById: string | null;
  userSubscription?: UserSubscription | null;
  withdrawalDate: Date | null;
};
