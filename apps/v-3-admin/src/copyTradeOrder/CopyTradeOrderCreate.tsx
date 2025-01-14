import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { CopyTradeTitle } from "../copyTrade/CopyTradeTitle";
import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const CopyTradeOrderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Act Px" source="actPx" />
        <NumberInput label="Act Sz" source="actSz" />
        <ReferenceInput
          source="copyTrades.id"
          reference="CopyTrade"
          label="Copy Trades"
        >
          <SelectInput optionText={CopyTradeTitle} />
        </ReferenceInput>
        <TextInput label="Created By Id" source="createdById" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <NumberInput step={1} label="Percentage" source="percentage" />
        <NumberInput label="Request Px" source="requestPx" />
        <NumberInput label="Request Sz" source="requestSz" />
        <DateTimeInput label="Requested At" source="requestedAt" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <TextInput label="Side" source="side" />
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Status At" source="statusAt" />
        <TextInput label="Status Message" source="statusMessage" />
        <NumberInput label="Stop Loss Px" source="stopLossPx" />
        <NumberInput label="Take Profit Px" source="takeProfitPx" />
        <TextInput label="Tp Value" source="tpValue" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
