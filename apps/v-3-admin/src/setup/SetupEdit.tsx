import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { ClapTitle } from "../clap/ClapTitle";
import { CopyTradeOrderTitle } from "../copyTradeOrder/CopyTradeOrderTitle";
import { CopyTradeTitle } from "../copyTrade/CopyTradeTitle";
import { ReportTitle } from "../report/ReportTitle";
import { SetupValueHistoryTitle } from "../setupValueHistory/SetupValueHistoryTitle";
import { UserTitle } from "../user/UserTitle";
import { TraderSetupPnlPerformanceTitle } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceTitle";
import { UserNotificationTitle } from "../userNotification/UserNotificationTitle";
import { WatchListTitle } from "../watchList/WatchListTitle";

export const SetupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Activated Stop Value" source="activatedStopValue" />
        <DateTimeInput label="Activation Date" source="activationDate" />
        <SelectInput
          source="category"
          label="Category"
          choices={[
            { label: "spot", value: "spot" },
            { label: "futures", value: "futures" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="clap" reference="Clap">
          <SelectArrayInput
            optionText={ClapTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Clap Count" source="clapCount" />
        <DateTimeInput label="Close Date" source="closeDate" />
        <NumberInput label="Close Price" source="closePrice" />
        <TextInput label="Closed By Id" source="closedById" />
        <TextInput label="Coin Name" source="coinName" />
        <ReferenceArrayInput source="copyTradeOrder" reference="CopyTradeOrder">
          <SelectArrayInput
            optionText={CopyTradeOrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="copyTrades" reference="CopyTrade">
          <SelectArrayInput
            optionText={CopyTradeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Created By Id" source="createdById" />
        <SelectInput
          source="duration"
          label="Duration"
          choices={[
            { label: "shortterm", value: "shortterm" },
            { label: "midterm", value: "midterm" },
            { label: "longterm", value: "longterm" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Entry Value" source="entryValue" />
        <NumberInput label="Entry Value End" source="entryValueEnd" />
        <TextInput label="Image" source="image" />
        <TextInput label="Image Success" source="imageSuccess" />
        <NumberInput label="Initial Entry Value" source="initialEntryValue" />
        <NumberInput
          label="Initial Entry Value End"
          source="initialEntryValueEnd"
        />
        <NumberInput
          label="Initial Profit Taking1"
          source="initialProfitTaking1"
        />
        <NumberInput
          label="Initial Profit Taking2"
          source="initialProfitTaking2"
        />
        <NumberInput
          label="Initial Profit Taking3"
          source="initialProfitTaking3"
        />
        <NumberInput
          label="Initial Profit Taking Amount1"
          source="initialProfitTakingAmount1"
        />
        <NumberInput
          label="Initial Profit Taking Amount2"
          source="initialProfitTakingAmount2"
        />
        <NumberInput
          label="Initial Profit Taking Amount3"
          source="initialProfitTakingAmount3"
        />
        <TextInput label="Initial Rr" source="initialRr" />
        <NumberInput label="Initial Stop Value" source="initialStopValue" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Hidden" source="isHidden" />
        <BooleanInput label="Is Stop" source="isStop" />
        <BooleanInput label="Is Targeted" source="isTargeted" />
        <BooleanInput label="Is Tp1" source="isTp1" />
        <BooleanInput label="Is Tp2" source="isTp2" />
        <BooleanInput label="Is Tp3" source="isTp3" />
        <SelectInput
          source="position"
          label="Position"
          choices={[
            { label: "long", value: "long" },
            { label: "short", value: "short" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="Previous Entry Value" source="previousEntryValue" />
        <NumberInput
          label="Previous Entry Value End"
          source="previousEntryValueEnd"
        />
        <NumberInput
          label="Previous Profit Taking1"
          source="previousProfitTaking1"
        />
        <NumberInput
          label="Previous Profit Taking2"
          source="previousProfitTaking2"
        />
        <NumberInput
          label="Previous Profit Taking3"
          source="previousProfitTaking3"
        />
        <NumberInput
          label="Previous Profit Taking Amount1"
          source="previousProfitTakingAmount1"
        />
        <NumberInput
          label="Previous Profit Taking Amount2"
          source="previousProfitTakingAmount2"
        />
        <NumberInput
          label="Previous Profit Taking Amount3"
          source="previousProfitTakingAmount3"
        />
        <NumberInput label="Previous Stop Value" source="previousStopValue" />
        <NumberInput label="Profit Taking1" source="profitTaking1" />
        <NumberInput label="Profit Taking2" source="profitTaking2" />
        <NumberInput label="Profit Taking3" source="profitTaking3" />
        <NumberInput
          step={1}
          label="Profit Taking Amount1"
          source="profitTakingAmount1"
        />
        <NumberInput
          step={1}
          label="Profit Taking Amount2"
          source="profitTakingAmount2"
        />
        <NumberInput
          step={1}
          label="Profit Taking Amount3"
          source="profitTakingAmount3"
        />
        <NumberInput label="R Value" source="rValue" />
        <ReferenceArrayInput source="report" reference="Report">
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="setupValueHistory"
          reference="SetupValueHistory"
        >
          <SelectArrayInput
            optionText={SetupValueHistoryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "incoming", value: "incoming" },
            { label: "active", value: "active" },
            { label: "cancelled", value: "cancelled" },
            { label: "stopped", value: "stopped" },
            { label: "success", value: "success" },
            { label: "closed", value: "closed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Stop Date" source="stopDate" />
        <NumberInput label="Stop Distance" source="stopDistance" />
        <NumberInput label="Stop Value" source="stopValue" />
        <TextInput label="Sub Status" source="subStatus" />
        <TextInput label="Tags" source="tags" />
        <DateTimeInput label="Target Date" source="targetDate" />
        <DateTimeInput label="Tp1 Date" source="tp1Date" />
        <DateTimeInput label="Tp2 Date" source="tp2Date" />
        <DateTimeInput label="Tp3 Date" source="tp3Date" />
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="traderSetupPnlPerformance.id"
          reference="TraderSetupPnlPerformance"
          label="Trader Setup Pnl Performance"
        >
          <SelectInput optionText={TraderSetupPnlPerformanceTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceArrayInput
          source="userNotification"
          reference="UserNotification"
        >
          <SelectArrayInput
            optionText={UserNotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="watchList" reference="WatchList">
          <SelectArrayInput
            optionText={WatchListTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
