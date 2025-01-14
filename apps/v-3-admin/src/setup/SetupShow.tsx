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

import { SETUP_TITLE_FIELD } from "./SetupTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { COPYTRADE_TITLE_FIELD } from "../copyTrade/CopyTradeTitle";
import { TRADERSETUPPNLPERFORMANCE_TITLE_FIELD } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceTitle";

export const SetupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activated Stop Value" source="activatedStopValue" />
        <TextField label="Activation Date" source="activationDate" />
        <TextField label="Category" source="category" />
        <TextField label="Clap Count" source="clapCount" />
        <TextField label="Close Date" source="closeDate" />
        <TextField label="Close Price" source="closePrice" />
        <TextField label="Closed By Id" source="closedById" />
        <TextField label="Coin Name" source="coinName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Duration" source="duration" />
        <TextField label="Entry Value" source="entryValue" />
        <TextField label="Entry Value End" source="entryValueEnd" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Image Success" source="imageSuccess" />
        <TextField label="Initial Entry Value" source="initialEntryValue" />
        <TextField
          label="Initial Entry Value End"
          source="initialEntryValueEnd"
        />
        <TextField
          label="Initial Profit Taking1"
          source="initialProfitTaking1"
        />
        <TextField
          label="Initial Profit Taking2"
          source="initialProfitTaking2"
        />
        <TextField
          label="Initial Profit Taking3"
          source="initialProfitTaking3"
        />
        <TextField
          label="Initial Profit Taking Amount1"
          source="initialProfitTakingAmount1"
        />
        <TextField
          label="Initial Profit Taking Amount2"
          source="initialProfitTakingAmount2"
        />
        <TextField
          label="Initial Profit Taking Amount3"
          source="initialProfitTakingAmount3"
        />
        <TextField label="Initial Rr" source="initialRr" />
        <TextField label="Initial Stop Value" source="initialStopValue" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Hidden" source="isHidden" />
        <BooleanField label="Is Stop" source="isStop" />
        <BooleanField label="Is Targeted" source="isTargeted" />
        <BooleanField label="Is Tp1" source="isTp1" />
        <BooleanField label="Is Tp2" source="isTp2" />
        <BooleanField label="Is Tp3" source="isTp3" />
        <TextField label="Position" source="position" />
        <TextField label="Previous Entry Value" source="previousEntryValue" />
        <TextField
          label="Previous Entry Value End"
          source="previousEntryValueEnd"
        />
        <TextField
          label="Previous Profit Taking1"
          source="previousProfitTaking1"
        />
        <TextField
          label="Previous Profit Taking2"
          source="previousProfitTaking2"
        />
        <TextField
          label="Previous Profit Taking3"
          source="previousProfitTaking3"
        />
        <TextField
          label="Previous Profit Taking Amount1"
          source="previousProfitTakingAmount1"
        />
        <TextField
          label="Previous Profit Taking Amount2"
          source="previousProfitTakingAmount2"
        />
        <TextField
          label="Previous Profit Taking Amount3"
          source="previousProfitTakingAmount3"
        />
        <TextField label="Previous Stop Value" source="previousStopValue" />
        <TextField label="Profit Taking1" source="profitTaking1" />
        <TextField label="Profit Taking2" source="profitTaking2" />
        <TextField label="Profit Taking3" source="profitTaking3" />
        <TextField label="Profit Taking Amount1" source="profitTakingAmount1" />
        <TextField label="Profit Taking Amount2" source="profitTakingAmount2" />
        <TextField label="Profit Taking Amount3" source="profitTakingAmount3" />
        <TextField label="R Value" source="rValue" />
        <TextField label="Status" source="status" />
        <TextField label="Stop Date" source="stopDate" />
        <TextField label="Stop Distance" source="stopDistance" />
        <TextField label="Stop Value" source="stopValue" />
        <TextField label="Sub Status" source="subStatus" />
        <TextField label="Tags" source="tags" />
        <TextField label="Target Date" source="targetDate" />
        <TextField label="Tp1 Date" source="tp1Date" />
        <TextField label="Tp2 Date" source="tp2Date" />
        <TextField label="Tp3 Date" source="tp3Date" />
        <ReferenceField label="Trader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Trader Setup Pnl Performance"
          source="tradersetuppnlperformance.id"
          reference="TraderSetupPnlPerformance"
        >
          <TextField source={TRADERSETUPPNLPERFORMANCE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <ReferenceManyField reference="Clap" target="setupId" label="Claps">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CopyTradeOrder"
          target="setupId"
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
        <ReferenceManyField
          reference="CopyTrade"
          target="setupId"
          label="CopyTrades"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="setupId" label="Reports">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SetupValueHistory"
          target="setupId"
          label="SetupValueHistories"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Field Field" source="fieldField" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserNotification"
          target="setupId"
          label="UserNotifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Column Value" source="columnValue" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Message" source="message" />
            <TextField label="Message Id" source="messageId" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <TextField label="Updated Column" source="updatedColumn" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WatchList"
          target="setupId"
          label="WatchLists"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
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
