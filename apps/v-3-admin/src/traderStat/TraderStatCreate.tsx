import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TraderStatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Monthly Pnl" source="monthlyPnl" />
        <NumberInput label="Monthly Pnl Rate" source="monthlyPnlRate" />
        <NumberInput label="Monthly R" source="monthlyR" />
        <NumberInput label="Monthly Roi" source="monthlyRoi" />
        <NumberInput label="Monthly Win Rate" source="monthlyWinRate" />
        <NumberInput label="Pnl" source="pnl" />
        <NumberInput label="Pnl Rate" source="pnlRate" />
        <NumberInput step={1} label="Rate" source="rate" />
        <NumberInput step={1} label="Risk Score" source="riskScore" />
        <DateTimeInput label="Stat At" source="statAt" />
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput label="Win Rate" source="winRate" />
      </SimpleForm>
    </Create>
  );
};
