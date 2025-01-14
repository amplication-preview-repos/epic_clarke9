import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserSubscriptionTitle } from "../userSubscription/UserSubscriptionTitle";

export const SubscriptionPoolCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Cancellation Date" source="cancellationDate" />
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Cancelled" source="isCancelled" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <BooleanInput label="Is Withdrawal" source="isWithdrawal" />
        <DateTimeInput label="Paid Date" source="paidDate" />
        <DateTimeInput label="Trader Earn Date" source="traderEarnDate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput
          source="userSubscription.id"
          reference="UserSubscription"
          label="User Subscription"
        >
          <SelectInput optionText={UserSubscriptionTitle} />
        </ReferenceInput>
        <DateTimeInput label="Withdrawal Date" source="withdrawalDate" />
      </SimpleForm>
    </Create>
  );
};
