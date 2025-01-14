import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserSubscriptionTitle } from "../userSubscription/UserSubscriptionTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Created By Id" source="createdById" />
        <NumberInput label="Discounted Price" source="discountedPrice" />
        <NumberInput step={1} label="Duration" source="duration" />
        <NumberInput label="Gross Revenue" source="grossRevenue" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Pool Money" source="poolMoney" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Referral Discount" source="referralDiscount" />
        <NumberInput label="Trader Pool Ratio" source="traderPoolRatio" />
        <NumberInput
          label="Trader Referral Earnings"
          source="traderReferralEarnings"
        />
        <NumberInput label="Trader Share Ratio" source="traderShareRatio" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceArrayInput
          source="userSubscription"
          reference="UserSubscription"
        >
          <SelectArrayInput
            optionText={UserSubscriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
