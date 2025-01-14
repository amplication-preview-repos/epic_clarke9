import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { UserSubscriptionTitle } from "../userSubscription/UserSubscriptionTitle";

export const TraderReferralEarningEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Cancellation Date" source="cancellationDate" />
        <TextInput label="Created By Id" source="createdById" />
        <NumberInput step={1} label="Installment" source="installment" />
        <NumberInput step={1} label="Installments" source="installments" />
        <BooleanInput label="Is Cancelled" source="isCancelled" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Paid" source="isPaid" />
        <BooleanInput label="Is Withdrawal" source="isWithdrawal" />
        <DateTimeInput label="Paid Date" source="paidDate" />
        <DateTimeInput label="Trader Earn Date" source="traderEarnDate" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userSubscription.id"
          reference="UserSubscription"
          label="User Subscription"
        >
          <SelectInput optionText={UserSubscriptionTitle} />
        </ReferenceInput>
        <DateTimeInput label="Withdrawal Date" source="withdrawalDate" />
      </SimpleForm>
    </Edit>
  );
};
