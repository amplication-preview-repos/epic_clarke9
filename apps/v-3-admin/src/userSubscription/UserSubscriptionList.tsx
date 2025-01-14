import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserSubscriptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserSubscriptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField
          label="Auto Renew Product Code"
          source="autoRenewProductCode"
        />
        <BooleanField label="Auto Renew Status" source="autoRenewStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Currency" source="currency" />
        <TextField label="Data" source="data" />
        <TextField label="Expire Date" source="expireDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Cancelled" source="isCancelled" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Expired" source="isExpired" />
        <BooleanField label="Is Payment Received" source="isPaymentReceived" />
        <BooleanField label="Is Trial" source="isTrial" />
        <TextField label="Market" source="market" />
        <TextField label="Price" source="price" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Raw Data" source="rawData" />
        <TextField label="Start Date" source="startDate" />
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
