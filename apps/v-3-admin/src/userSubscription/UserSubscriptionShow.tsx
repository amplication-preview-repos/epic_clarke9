import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USERSUBSCRIPTION_TITLE_FIELD } from "./UserSubscriptionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const UserSubscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
        <ReferenceManyField
          reference="SubscriptionPool"
          target="subscriptionId"
          label="SubscriptionPools"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <TextField label="Cancellation Date" source="cancellationDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Paid" source="isPaid" />
            <BooleanField label="Is Withdrawal" source="isWithdrawal" />
            <TextField label="Paid Date" source="paidDate" />
            <TextField label="Trader Earn Date" source="traderEarnDate" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField
              label="User Subscription"
              source="usersubscription.id"
              reference="UserSubscription"
            >
              <TextField source={USERSUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Withdrawal Date" source="withdrawalDate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TraderReferralEarning"
          target="subscriptionId"
          label="TraderReferralEarnings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <TextField label="Cancellation Date" source="cancellationDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <TextField label="Installment" source="installment" />
            <TextField label="Installments" source="installments" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Paid" source="isPaid" />
            <BooleanField label="Is Withdrawal" source="isWithdrawal" />
            <TextField label="Paid Date" source="paidDate" />
            <TextField label="Trader Earn Date" source="traderEarnDate" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Subscription"
              source="usersubscription.id"
              reference="UserSubscription"
            >
              <TextField source={USERSUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Withdrawal Date" source="withdrawalDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
