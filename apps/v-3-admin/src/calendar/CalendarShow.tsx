import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CALENDAR_TITLE_FIELD } from "./CalendarTitle";

export const CalendarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Acro Expand" source="acroExpand" />
        <TextField label="Actual" source="actual" />
        <TextField label="Also Called" source="alsoCalled" />
        <TextField label="Cc Notes" source="ccNotes" />
        <TextField label="Cc Notice" source="ccNotice" />
        <TextField label="Country" source="country" />
        <TextField label="Country Code" source="countryCode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Data Ecobaseid" source="dataEcobaseid" />
        <TextField label="Data Event Id" source="dataEventId" />
        <TextField label="Date" source="date" />
        <TextField label="Derived Via" source="derivedVia" />
        <TextField label="Description" source="description" />
        <TextField label="Event Datetime" source="eventDatetime" />
        <TextField label="Forecast" source="forecast" />
        <TextField label="Frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="Impact" source="impact" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Measures" source="measures" />
        <TextField label="Next Release" source="nextRelease" />
        <TextField label="Previous" source="previous" />
        <TextField label="Source" source="source" />
        <TextField label="Speaker" source="speaker" />
        <TextField label="Time" source="time" />
        <TextField label="Title" source="title" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <TextField label="Usual Effect" source="usualEffect" />
        <TextField label="Why Traderscare" source="whyTraderscare" />
        <ReferenceManyField
          reference="CalendarText"
          target="calendarId"
          label="CalendarTexts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Acro Expand" source="acroExpand" />
            <TextField label="Also Called" source="alsoCalled" />
            <ReferenceField
              label="Calendar"
              source="calendar.id"
              reference="Calendar"
            >
              <TextField source={CALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Cc Notes" source="ccNotes" />
            <TextField label="Cc Notice" source="ccNotice" />
            <TextField label="Country" source="country" />
            <TextField label="Derived Via" source="derivedVia" />
            <TextField label="Description" source="description" />
            <TextField label="Frequency" source="frequency" />
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <TextField label="Measures" source="measures" />
            <TextField label="Source" source="source" />
            <TextField label="Speaker" source="speaker" />
            <TextField label="Title" source="title" />
            <TextField label="Usual Effect" source="usualEffect" />
            <TextField label="Why Traderscare" source="whyTraderscare" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
