import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SETUP_TITLE_FIELD } from "../setup/SetupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserNotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Column Value" source="columnValue" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Read" source="isRead" />
        <TextField label="Message" source="message" />
        <TextField label="Message Id" source="messageId" />
        <ReferenceField label="Setup" source="setup.id" reference="Setup">
          <TextField source={SETUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type Field" source="typeField" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <TextField label="Updated Column" source="updatedColumn" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
