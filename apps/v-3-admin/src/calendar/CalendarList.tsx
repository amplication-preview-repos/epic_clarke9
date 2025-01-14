import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CalendarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Calendars"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Why Traderscare" source="whyTraderscare" />{" "}
      </Datagrid>
    </List>
  );
};
