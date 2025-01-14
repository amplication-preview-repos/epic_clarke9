import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ServerNotificationMessageList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ServerNotificationMessages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Updated By Id" source="updatedById" />{" "}
      </Datagrid>
    </List>
  );
};
