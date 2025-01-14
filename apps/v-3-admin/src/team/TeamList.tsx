import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Teams"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Closed" source="closed" />
        <TextField label="Daily Closed" source="dailyClosed" />
        <TextField label="Daily Pnl" source="dailyPnl" />
        <TextField label="Daily Roe" source="dailyRoe" />
        <TextField label="Daily Wr" source="dailyWr" />
        <TextField label="ID" source="id" />
        <TextField label="Monthly Closed" source="monthlyClosed" />
        <TextField label="Monthly Pnl" source="monthlyPnl" />
        <TextField label="Monthly Roe" source="monthlyRoe" />
        <TextField label="Monthly Wr" source="monthlyWr" />
        <TextField label="Name" source="name" />
        <TextField label="Pnl" source="pnl" />
        <TextField label="Roe" source="roe" />
        <TextField label="Spot Closed" source="spotClosed" />
        <TextField label="Spot Daily Closed" source="spotDailyClosed" />
        <TextField label="Spot Daily Pnl" source="spotDailyPnl" />
        <TextField label="Spot Daily Roe" source="spotDailyRoe" />
        <TextField label="Spot Daily Wr" source="spotDailyWr" />
        <TextField label="Spot Monthly Closed" source="spotMonthlyClosed" />
        <TextField label="Spot Monthly Pnl" source="spotMonthlyPnl" />
        <TextField label="Spot Monthly Roe" source="spotMonthlyRoe" />
        <TextField label="Spot Monthly Wr" source="spotMonthlyWr" />
        <TextField label="Spot Pnl" source="spotPnl" />
        <TextField label="Spot Roe" source="spotRoe" />
        <TextField label="Spot Weekly Closed" source="spotWeeklyClosed" />
        <TextField label="Spot Weekly Pnl" source="spotWeeklyPnl" />
        <TextField label="Spot Weekly Roe" source="spotWeeklyRoe" />
        <TextField label="Spot Weekly Wr" source="spotWeeklyWr" />
        <TextField label="Spot Wr" source="spotWr" />
        <TextField label="Stat At" source="statAt" />
        <TextField label="Summary Daily Roe" source="summaryDailyRoe" />
        <TextField label="Summary Daily Wr" source="summaryDailyWr" />
        <TextField label="Summary Monthly Roe" source="summaryMonthlyRoe" />
        <TextField label="Summary Monthly Wr" source="summaryMonthlyWr" />
        <TextField label="Summary Roe" source="summaryRoe" />
        <TextField label="Summary Weekly Roe" source="summaryWeeklyRoe" />
        <TextField label="Summary Weekly Wr" source="summaryWeeklyWr" />
        <TextField label="Summary Wr" source="summaryWr" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Weekly Closed" source="weeklyClosed" />
        <TextField label="Weekly Pnl" source="weeklyPnl" />
        <TextField label="Weekly Roe" source="weeklyRoe" />
        <TextField label="Weekly Wr" source="weeklyWr" />
        <TextField label="Wr" source="wr" />{" "}
      </Datagrid>
    </List>
  );
};
