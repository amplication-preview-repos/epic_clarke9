import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SETUP_TITLE_FIELD } from "../setup/SetupTitle";

export const SetupValueHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Field Field" source="fieldField" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Setup" source="setup.id" reference="Setup">
          <TextField source={SETUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
