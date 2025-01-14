export type ServerNotificationMessageCreateInput = {
  createdById?: string | null;
  isDeleted: boolean;
  message?: string | null;
  messageJson?: string | null;
  notificationId?: string | null;
  notificationType?: string | null;
  provider?: string | null;
  transactionId?: string | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
