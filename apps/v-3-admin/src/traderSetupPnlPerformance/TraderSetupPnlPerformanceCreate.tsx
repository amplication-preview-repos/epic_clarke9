import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const TraderSetupPnlPerformanceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Estimated Pnl" source="estimatedPnl" />
        <NumberInput label="Estimated Pnl Rate" source="estimatedPnlRate" />
        <NumberInput label="Fee Rate" source="feeRate" />
        <NumberInput label="Pnl" source="pnl" />
        <NumberInput label="Pnl Rate" source="pnlRate" />
        <NumberInput label="R R" source="rR" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
