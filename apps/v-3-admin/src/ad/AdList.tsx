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

export const AdList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Ads"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Ads Group Id" source="adsGroupId" />
        <TextField label="Ads Id" source="adsId" />
        <TextField label="Campaign" source="campaign" />
        <TextField label="Company" source="company" />
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="Lang" source="lang" />
        <TextField label="Pages" source="pages" />
        <TextField label="Sort No" source="sortNo" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Title" source="title" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <TextField label="Url" source="url" />
        <TextField label="Video" source="video" />{" "}
      </Datagrid>
    </List>
  );
};
