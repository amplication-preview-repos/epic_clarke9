import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const ServerNotificationMessageShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Message" source="message" />
        <TextField label="Message Json" source="messageJson" />
        <TextField label="Notification Id" source="notificationId" />
        <TextField label="Notification Type" source="notificationType" />
        <TextField label="Provider" source="provider" />
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
      </SimpleShowLayout>
    </Show>
  );
};
