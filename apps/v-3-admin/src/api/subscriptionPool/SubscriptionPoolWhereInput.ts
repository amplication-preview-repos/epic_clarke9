import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserSubscriptionWhereUniqueInput } from "../userSubscription/UserSubscriptionWhereUniqueInput";

export type SubscriptionPoolWhereInput = {
  amount?: FloatNullableFilter;
  cancellationDate?: DateTimeNullableFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isCancelled?: BooleanFilter;
  isDeleted?: BooleanFilter;
  isPaid?: BooleanFilter;
  isWithdrawal?: BooleanFilter;
  paidDate?: DateTimeNullableFilter;
  traderEarnDate?: DateTimeNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  userSubscription?: UserSubscriptionWhereUniqueInput;
  withdrawalDate?: DateTimeNullableFilter;
};
