import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Updated By Id" source="updatedById" />
        <ReferenceManyField
          reference="UserSubscription"
          target="productId"
          label="UserSubscriptions"
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
            <BooleanField
              label="Is Payment Received"
              source="isPaymentReceived"
            />
            <BooleanField label="Is Trial" source="isTrial" />
            <TextField label="Market" source="market" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
