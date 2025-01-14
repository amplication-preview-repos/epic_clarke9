import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type ServerNotificationMessageWhereInput = {
  createdAt?: DateTimeNullableFilter;
  createdById?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanFilter;
  message?: StringNullableFilter;
  messageJson?: StringNullableFilter;
  notificationId?: StringNullableFilter;
  notificationType?: StringNullableFilter;
  provider?: StringNullableFilter;
  transactionId?: StringNullableFilter;
  updatedAt?: DateTimeNullableFilter;
  updatedById?: StringNullableFilter;
};
