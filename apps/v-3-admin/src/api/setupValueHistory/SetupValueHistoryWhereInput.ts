import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SetupValueHistoryWhereInput = {
  createdAt?: DateTimeNullableFilter;
  fieldField?: StringFilter;
  id?: StringFilter;
  setup?: SetupWhereUniqueInput;
  value?: FloatNullableFilter;
};
