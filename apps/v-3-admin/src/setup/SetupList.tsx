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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TRADERSETUPPNLPERFORMANCE_TITLE_FIELD } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceTitle";

export const SetupList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Setups"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Updated By Id" source="updatedById" />{" "}
      </Datagrid>
    </List>
  );
};
