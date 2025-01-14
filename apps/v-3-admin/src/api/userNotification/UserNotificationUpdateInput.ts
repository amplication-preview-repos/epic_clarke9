import { SetupWhereUniqueInput } from "../setup/SetupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserNotificationUpdateInput = {
  columnValue?: string | null;
  createdById?: string | null;
  isDeleted?: boolean;
  isRead?: boolean | null;
  message?: string | null;
  messageId?: string | null;
  setup?: SetupWhereUniqueInput | null;
  trader?: UserWhereUniqueInput | null;
  typeField?: number;
  updatedAt?: Date | null;
  updatedById?: string | null;
  updatedColumn?: string | null;
  user?: UserWhereUniqueInput | null;
};
