import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const ClapCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
