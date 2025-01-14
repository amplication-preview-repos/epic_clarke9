import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserSubscriptionListRelationFilter } from "../userSubscription/UserSubscriptionListRelationFilter";

export type ProductWhereInput = {
  code?: StringFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  discountedPrice?: FloatNullableFilter;
  duration?: IntNullableFilter;
  grossRevenue?: FloatNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  name?: StringFilter;
  poolMoney?: FloatNullableFilter;
  price?: FloatNullableFilter;
  referralDiscount?: FloatNullableFilter;
  traderPoolRatio?: FloatNullableFilter;
  traderReferralEarnings?: FloatNullableFilter;
  traderShareRatio?: FloatNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  userSubscription?: UserSubscriptionListRelationFilter;
};
