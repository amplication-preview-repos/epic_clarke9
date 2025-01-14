import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { SubscriptionPoolTitle } from "../subscriptionPool/SubscriptionPoolTitle";
import { UserTitle } from "../user/UserTitle";
import { TraderReferralEarningTitle } from "../traderReferralEarning/TraderReferralEarningTitle";

export const UserSubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Auto Renew Product Code"
          source="autoRenewProductCode"
        />
        <BooleanInput label="Auto Renew Status" source="autoRenewStatus" />
        <TextInput label="Created By Id" source="createdById" />
        <TextInput label="Currency" source="currency" />
        <TextInput label="Data" source="data" />
        <DateTimeInput label="Expire Date" source="expireDate" />
        <BooleanInput label="Is Cancelled" source="isCancelled" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Expired" source="isExpired" />
        <BooleanInput label="Is Payment Received" source="isPaymentReceived" />
        <BooleanInput label="Is Trial" source="isTrial" />
        <TextInput label="Market" source="market" />
        <NumberInput label="Price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="Raw Data" source="rawData" />
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceArrayInput
          source="subscriptionPool"
          reference="SubscriptionPool"
        >
          <SelectArrayInput
            optionText={SubscriptionPoolTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="traderReferralEarning"
          reference="TraderReferralEarning"
        >
          <SelectArrayInput
            optionText={TraderReferralEarningTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Transaction Id" source="transactionId" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
