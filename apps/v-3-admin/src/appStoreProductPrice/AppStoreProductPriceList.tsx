import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppStoreProductPriceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AppStoreProductPrices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Activated At" source="activatedAt" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Product Code" source="productCode" />{" "}
      </Datagrid>
    </List>
  );
};
