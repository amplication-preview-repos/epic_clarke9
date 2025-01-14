import { UserSubscription } from "../userSubscription/UserSubscription";

export type Product = {
  code: string;
  createdAt: Date | null;
  createdById: string | null;
  discountedPrice: number | null;
  duration: number | null;
  grossRevenue: number | null;
  id: string;
  isDeleted: boolean;
  name: string;
  poolMoney: number | null;
  price: number | null;
  referralDiscount: number | null;
  traderPoolRatio: number | null;
  traderReferralEarnings: number | null;
  traderShareRatio: number | null;
  updatedAt: Date | null;
  updatedById: string | null;
  userSubscription?: Array<UserSubscription>;
};
