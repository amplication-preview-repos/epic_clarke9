import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CalendarTitle } from "../calendar/CalendarTitle";

export const CalendarTextCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Acro Expand" source="acroExpand" />
        <TextInput label="Also Called" source="alsoCalled" />
        <ReferenceInput
          source="calendar.id"
          reference="Calendar"
          label="Calendar"
        >
          <SelectInput optionText={CalendarTitle} />
        </ReferenceInput>
        <TextInput label="Cc Notes" source="ccNotes" />
        <TextInput label="Cc Notice" source="ccNotice" />
        <TextInput label="Country" source="country" />
        <TextInput label="Derived Via" source="derivedVia" />
        <TextInput label="Description" source="description" />
        <TextInput label="Frequency" source="frequency" />
        <TextInput label="Language" source="language" />
        <TextInput label="Measures" source="measures" />
        <TextInput label="Source" source="source" />
        <TextInput label="Speaker" source="speaker" />
        <TextInput label="Title" source="title" />
        <TextInput label="Usual Effect" source="usualEffect" />
        <TextInput label="Why Traderscare" source="whyTraderscare" />
      </SimpleForm>
    </Create>
  );
};
