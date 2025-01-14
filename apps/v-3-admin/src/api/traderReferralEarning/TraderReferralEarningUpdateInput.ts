import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserSubscriptionWhereUniqueInput } from "../userSubscription/UserSubscriptionWhereUniqueInput";

export type TraderReferralEarningUpdateInput = {
  amount?: number | null;
  cancellationDate?: Date | null;
  createdById?: string | null;
  installment?: number;
  installments?: number;
  isCancelled?: boolean;
  isDeleted?: boolean;
  isPaid?: boolean;
  isWithdrawal?: boolean;
  paidDate?: Date | null;
  traderEarnDate?: Date;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
  userSubscription?: UserSubscriptionWhereUniqueInput | null;
  withdrawalDate?: Date | null;
};
