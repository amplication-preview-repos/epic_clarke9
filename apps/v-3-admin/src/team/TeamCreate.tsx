import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TeamTraderTitle } from "../teamTrader/TeamTraderTitle";
import { UserTitle } from "../user/UserTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Closed" source="closed" />
        <NumberInput step={1} label="Daily Closed" source="dailyClosed" />
        <NumberInput label="Daily Pnl" source="dailyPnl" />
        <NumberInput label="Daily Roe" source="dailyRoe" />
        <NumberInput label="Daily Wr" source="dailyWr" />
        <NumberInput step={1} label="Monthly Closed" source="monthlyClosed" />
        <NumberInput label="Monthly Pnl" source="monthlyPnl" />
        <NumberInput label="Monthly Roe" source="monthlyRoe" />
        <NumberInput label="Monthly Wr" source="monthlyWr" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Pnl" source="pnl" />
        <NumberInput label="Roe" source="roe" />
        <NumberInput step={1} label="Spot Closed" source="spotClosed" />
        <NumberInput
          step={1}
          label="Spot Daily Closed"
          source="spotDailyClosed"
        />
        <NumberInput label="Spot Daily Pnl" source="spotDailyPnl" />
        <NumberInput label="Spot Daily Roe" source="spotDailyRoe" />
        <NumberInput label="Spot Daily Wr" source="spotDailyWr" />
        <NumberInput
          step={1}
          label="Spot Monthly Closed"
          source="spotMonthlyClosed"
        />
        <NumberInput label="Spot Monthly Pnl" source="spotMonthlyPnl" />
        <NumberInput label="Spot Monthly Roe" source="spotMonthlyRoe" />
        <NumberInput label="Spot Monthly Wr" source="spotMonthlyWr" />
        <NumberInput label="Spot Pnl" source="spotPnl" />
        <NumberInput label="Spot Roe" source="spotRoe" />
        <NumberInput
          step={1}
          label="Spot Weekly Closed"
          source="spotWeeklyClosed"
        />
        <NumberInput label="Spot Weekly Pnl" source="spotWeeklyPnl" />
        <NumberInput label="Spot Weekly Roe" source="spotWeeklyRoe" />
        <NumberInput label="Spot Weekly Wr" source="spotWeeklyWr" />
        <NumberInput label="Spot Wr" source="spotWr" />
        <DateTimeInput label="Stat At" source="statAt" />
        <NumberInput label="Summary Daily Roe" source="summaryDailyRoe" />
        <NumberInput label="Summary Daily Wr" source="summaryDailyWr" />
        <NumberInput label="Summary Monthly Roe" source="summaryMonthlyRoe" />
        <NumberInput label="Summary Monthly Wr" source="summaryMonthlyWr" />
        <NumberInput label="Summary Roe" source="summaryRoe" />
        <NumberInput label="Summary Weekly Roe" source="summaryWeeklyRoe" />
        <NumberInput label="Summary Weekly Wr" source="summaryWeeklyWr" />
        <NumberInput label="Summary Wr" source="summaryWr" />
        <ReferenceArrayInput source="teamTraders" reference="TeamTrader">
          <SelectArrayInput
            optionText={TeamTraderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Weekly Closed" source="weeklyClosed" />
        <NumberInput label="Weekly Pnl" source="weeklyPnl" />
        <NumberInput label="Weekly Roe" source="weeklyRoe" />
        <NumberInput label="Weekly Wr" source="weeklyWr" />
        <NumberInput label="Wr" source="wr" />
      </SimpleForm>
    </Create>
  );
};
