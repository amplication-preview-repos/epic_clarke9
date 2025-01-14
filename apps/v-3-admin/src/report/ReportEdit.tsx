import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
