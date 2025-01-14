import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  discountedPrice?: SortOrder;
  duration?: SortOrder;
  grossRevenue?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  name?: SortOrder;
  poolMoney?: SortOrder;
  price?: SortOrder;
  referralDiscount?: SortOrder;
  traderPoolRatio?: SortOrder;
  traderReferralEarnings?: SortOrder;
  traderShareRatio?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
