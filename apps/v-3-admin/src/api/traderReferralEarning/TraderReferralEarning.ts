import { User } from "../user/User";
import { UserSubscription } from "../userSubscription/UserSubscription";

export type TraderReferralEarning = {
  amount: number | null;
  cancellationDate: Date | null;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  installment: number;
  installments: number;
  isCancelled: boolean;
  isDeleted: boolean;
  isPaid: boolean;
  isWithdrawal: boolean;
  paidDate: Date | null;
  traderEarnDate: Date;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User | null;
  userSubscription?: UserSubscription | null;
  withdrawalDate: Date | null;
};
