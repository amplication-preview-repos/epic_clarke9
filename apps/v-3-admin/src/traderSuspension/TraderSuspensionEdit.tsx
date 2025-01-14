import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TraderSuspensionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <DateTimeInput label="Suspension End Date" source="suspensionEndDate" />
        <DateTimeInput
          label="Suspension Start Date"
          source="suspensionStartDate"
        />
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
      </SimpleForm>
    </Edit>
  );
};
