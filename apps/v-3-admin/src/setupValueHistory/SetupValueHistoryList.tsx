import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SETUP_TITLE_FIELD } from "../setup/SetupTitle";

export const SetupValueHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SetupValueHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Field Field" source="fieldField" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Setup" source="setup.id" reference="Setup">
          <TextField source={SETUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
