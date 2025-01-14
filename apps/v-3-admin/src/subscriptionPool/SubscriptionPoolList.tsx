import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USERSUBSCRIPTION_TITLE_FIELD } from "../userSubscription/UserSubscriptionTitle";

export const SubscriptionPoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SubscriptionPools"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Withdrawal Date" source="withdrawalDate" />{" "}
      </Datagrid>
    </List>
  );
};
