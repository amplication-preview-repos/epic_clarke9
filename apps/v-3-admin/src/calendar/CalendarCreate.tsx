import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { CalendarTextTitle } from "../calendarText/CalendarTextTitle";

export const CalendarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Acro Expand" source="acroExpand" />
        <TextInput label="Actual" source="actual" />
        <TextInput label="Also Called" source="alsoCalled" />
        <ReferenceArrayInput source="calendarText" reference="CalendarText">
          <SelectArrayInput
            optionText={CalendarTextTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Cc Notes" source="ccNotes" />
        <TextInput label="Cc Notice" source="ccNotice" />
        <TextInput label="Country" source="country" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Created By Id" source="createdById" />
        <NumberInput step={1} label="Data Ecobaseid" source="dataEcobaseid" />
        <NumberInput step={1} label="Data Event Id" source="dataEventId" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Derived Via" source="derivedVia" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="Event Datetime" source="eventDatetime" />
        <TextInput label="Forecast" source="forecast" />
        <TextInput label="Frequency" source="frequency" />
        <TextInput label="Impact" source="impact" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Measures" source="measures" />
        <TextInput label="Next Release" source="nextRelease" />
        <TextInput label="Previous" source="previous" />
        <TextInput label="Source" source="source" />
        <TextInput label="Speaker" source="speaker" />
        <TextInput label="Time" source="time" />
        <TextInput label="Title" source="title" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <TextInput label="Usual Effect" source="usualEffect" />
        <TextInput label="Why Traderscare" source="whyTraderscare" />
      </SimpleForm>
    </Create>
  );
};
