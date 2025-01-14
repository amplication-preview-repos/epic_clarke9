import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const UserNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Column Value" source="columnValue" />
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Read" source="isRead" />
        <TextInput label="Message" source="message" />
        <TextInput label="Message Id" source="messageId" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Type Field" source="typeField" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <TextInput label="Updated Column" source="updatedColumn" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
