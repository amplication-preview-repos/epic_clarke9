import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TraderStatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TraderStats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Monthly Pnl" source="monthlyPnl" />
        <TextField label="Monthly Pnl Rate" source="monthlyPnlRate" />
        <TextField label="Monthly R" source="monthlyR" />
        <TextField label="Monthly Roi" source="monthlyRoi" />
        <TextField label="Monthly Win Rate" source="monthlyWinRate" />
        <TextField label="Pnl" source="pnl" />
        <TextField label="Pnl Rate" source="pnlRate" />
        <TextField label="Rate" source="rate" />
        <TextField label="Risk Score" source="riskScore" />
        <TextField label="Stat At" source="statAt" />
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Win Rate" source="winRate" />{" "}
      </Datagrid>
    </List>
  );
};
