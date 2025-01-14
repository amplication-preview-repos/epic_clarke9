import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderSetupPnlPerformanceWhereInput = {
  createdAt?: DateTimeNullableFilter;
  estimatedPnl?: FloatNullableFilter;
  estimatedPnlRate?: FloatNullableFilter;
  feeRate?: FloatNullableFilter;
  id?: StringFilter;
  pnl?: FloatNullableFilter;
  pnlRate?: FloatNullableFilter;
  rR?: FloatNullableFilter;
  setup?: SetupWhereUniqueInput;
  trader?: UserWhereUniqueInput;
  updatedAt?: DateTimeNullableFilter;
};
