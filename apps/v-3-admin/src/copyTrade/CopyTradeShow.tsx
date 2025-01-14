import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COPYTRADE_TITLE_FIELD } from "./CopyTradeTitle";
import { SETUP_TITLE_FIELD } from "../setup/SetupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CopyTradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activated At" source="activatedAt" />
        <TextField label="Asset Size" source="assetSize" />
        <TextField label="Copied At" source="copiedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Error Message" source="errorMessage" />
        <TextField label="Error No" source="errorNo" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Market" source="market" />
        <TextField label="Realized Pnl" source="realizedPnl" />
        <TextField label="Realized R" source="realizedR" />
        <ReferenceField label="Setup" source="setup.id" reference="Setup">
          <TextField source={SETUP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="State" source="state" />
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <TextField label="Usd Size" source="usdSize" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CopyTradeOrder"
          target="copyTradeId"
          label="CopyTradeOrders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Act Px" source="actPx" />
            <TextField label="Act Sz" source="actSz" />
            <ReferenceField
              label="Copy Trades"
              source="copytrade.id"
              reference="CopyTrade"
            >
              <TextField source={COPYTRADE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <TextField label="Percentage" source="percentage" />
            <TextField label="Request Px" source="requestPx" />
            <TextField label="Request Sz" source="requestSz" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Side" source="side" />
            <TextField label="Status" source="status" />
            <TextField label="Status At" source="statusAt" />
            <TextField label="Status Message" source="statusMessage" />
            <TextField label="Stop Loss Px" source="stopLossPx" />
            <TextField label="Take Profit Px" source="takeProfitPx" />
            <TextField label="Tp Value" source="tpValue" />
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
