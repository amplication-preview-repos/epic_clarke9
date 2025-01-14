import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type UserNotification = {
  columnValue: string | null;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  isRead: boolean | null;
  message: string | null;
  messageId: string | null;
  setup?: Setup | null;
  trader?: User | null;
  typeField: number;
  updatedAt: Date | null;
  updatedById: string | null;
  updatedColumn: string | null;
  user?: User | null;
};
