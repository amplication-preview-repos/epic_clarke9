import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const InviteeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <TextInput label="Market" source="market" />
        <TextInput label="Uid" source="uid" />
      </SimpleForm>
    </Create>
  );
};
