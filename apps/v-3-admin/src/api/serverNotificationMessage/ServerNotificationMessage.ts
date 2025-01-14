export type ServerNotificationMessage = {
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  message: string | null;
  messageJson: string | null;
  notificationId: string | null;
  notificationType: string | null;
  provider: string | null;
  transactionId: string | null;
  updatedAt: Date | null;
  updatedById: string | null;
};
