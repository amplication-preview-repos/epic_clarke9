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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TraderSetupPnlPerformanceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TraderSetupPnlPerformances"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Estimated Pnl" source="estimatedPnl" />
        <TextField label="Estimated Pnl Rate" source="estimatedPnlRate" />
        <TextField label="Fee Rate" source="feeRate" />
        <TextField label="ID" source="id" />
        <TextField label="Pnl" source="pnl" />
        <TextField label="Pnl Rate" source="pnlRate" />
        <TextField label="R R" source="rR" />
        <ReferenceField label="Setup" source="setup.id" reference="Setup">
          <TextField source={SETUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />{" "}
      </Datagrid>
    </List>
  );
};
