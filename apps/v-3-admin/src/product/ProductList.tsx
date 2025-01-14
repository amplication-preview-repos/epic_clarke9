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

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Discounted Price" source="discountedPrice" />
        <TextField label="Duration" source="duration" />
        <TextField label="Gross Revenue" source="grossRevenue" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Name" source="name" />
        <TextField label="Pool Money" source="poolMoney" />
        <TextField label="Price" source="price" />
        <TextField label="Referral Discount" source="referralDiscount" />
        <TextField label="Trader Pool Ratio" source="traderPoolRatio" />
        <TextField
          label="Trader Referral Earnings"
          source="traderReferralEarnings"
        />
        <TextField label="Trader Share Ratio" source="traderShareRatio" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />{" "}
      </Datagrid>
    </List>
  );
};
