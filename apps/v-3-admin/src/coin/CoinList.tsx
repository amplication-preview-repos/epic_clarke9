import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CoinList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Coins"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Futures" source="isFutures" />
        <BooleanField label="Is Spot" source="isSpot" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />{" "}
      </Datagrid>
    </List>
  );
};
