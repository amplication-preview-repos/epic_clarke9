import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InviteeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <TextInput label="Market" source="market" />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Edit>
  );
};
