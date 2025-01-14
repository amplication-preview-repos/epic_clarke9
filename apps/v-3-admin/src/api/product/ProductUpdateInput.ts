import { UserSubscriptionUpdateManyWithoutProductsInput } from "./UserSubscriptionUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  code?: string;
  createdById?: string | null;
  discountedPrice?: number | null;
  duration?: number | null;
  grossRevenue?: number | null;
  isDeleted?: boolean;
  name?: string;
  poolMoney?: number | null;
  price?: number | null;
  referralDiscount?: number | null;
  traderPoolRatio?: number | null;
  traderReferralEarnings?: number | null;
  traderShareRatio?: number | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  userSubscription?: UserSubscriptionUpdateManyWithoutProductsInput;
};
