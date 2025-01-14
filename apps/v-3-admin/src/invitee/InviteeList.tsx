import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InviteeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Invitees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Activated At" source="activatedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Market" source="market" />
        <TextField label="Uid" source="uid" />{" "}
      </Datagrid>
    </List>
  );
};
