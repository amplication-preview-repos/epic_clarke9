import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const ServerNotificationMessageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Message" source="message" />
        <TextInput label="Message Json" source="messageJson" />
        <TextInput label="Notification Id" source="notificationId" />
        <TextInput label="Notification Type" source="notificationType" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="Transaction Id" source="transactionId" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
      </SimpleForm>
    </Create>
  );
};
