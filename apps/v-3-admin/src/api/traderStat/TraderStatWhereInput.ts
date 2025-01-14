import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderStatWhereInput = {
  id?: StringFilter;
  monthlyPnl?: FloatNullableFilter;
  monthlyPnlRate?: FloatNullableFilter;
  monthlyR?: FloatNullableFilter;
  monthlyRoi?: FloatNullableFilter;
  monthlyWinRate?: FloatNullableFilter;
  pnl?: FloatNullableFilter;
  pnlRate?: FloatNullableFilter;
  rate?: IntNullableFilter;
  riskScore?: IntNullableFilter;
  statAt?: DateTimeNullableFilter;
  trader?: UserWhereUniqueInput;
  winRate?: FloatNullableFilter;
};
