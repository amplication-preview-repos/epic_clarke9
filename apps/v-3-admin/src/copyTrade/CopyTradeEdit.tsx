import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CopyTradeOrderTitle } from "../copyTradeOrder/CopyTradeOrderTitle";
import { SetupTitle } from "../setup/SetupTitle";
import { UserTitle } from "../user/UserTitle";

export const CopyTradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <NumberInput label="Asset Size" source="assetSize" />
        <DateTimeInput label="Copied At" source="copiedAt" />
        <ReferenceArrayInput source="copyTradeOrder" reference="CopyTradeOrder">
          <SelectArrayInput
            optionText={CopyTradeOrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Created By Id" source="createdById" />
        <TextInput label="Error Message" source="errorMessage" />
        <TextInput label="Error No" source="errorNo" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Market" source="market" />
        <NumberInput label="Realized Pnl" source="realizedPnl" />
        <NumberInput label="Realized R" source="realizedR" />
        <ReferenceInput source="setup.id" reference="Setup" label="Setup">
          <SelectInput optionText={SetupTitle} />
        </ReferenceInput>
        <TextInput label="State" source="state" />
        <ReferenceInput source="trader.id" reference="User" label="Trader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <NumberInput label="Usd Size" source="usdSize" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
