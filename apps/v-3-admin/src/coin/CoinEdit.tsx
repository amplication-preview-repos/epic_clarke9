import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const CoinEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Created By Id" source="createdById" />
        <TextInput label="Image" source="image" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Futures" source="isFutures" />
        <BooleanInput label="Is Spot" source="isSpot" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
      </SimpleForm>
    </Edit>
  );
};
