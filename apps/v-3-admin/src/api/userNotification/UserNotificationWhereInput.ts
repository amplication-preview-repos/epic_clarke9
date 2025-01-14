import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type UserNotificationWhereInput = {
  columnValue?: StringNullableFilter;
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  isRead?: BooleanNullableFilter;
  message?: StringNullableFilter;
  messageId?: StringNullableFilter;
  setup?: SetupWhereUniqueInput;
  trader?: UserWhereUniqueInput;
  typeField?: IntFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
  updatedColumn?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
