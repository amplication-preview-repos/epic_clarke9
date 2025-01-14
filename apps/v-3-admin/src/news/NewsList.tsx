import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const NewsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"News Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Date" source="date" />
        <TextField label="Full Text" source="fullText" />
        <TextField label="ID" source="id" />
        <TextField label="Image Url" source="imageURL" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <TextField label="News Url" source="newsURL" />
        <TextField label="Sentiment" source="sentiment" />
        <TextField label="Source Name" source="sourceName" />
        <TextField label="Text" source="text" />
        <TextField label="Thumbnail Url" source="thumbnailURL" />
        <TextField label="Tickers" source="tickers" />
        <TextField label="Title" source="title" />
        <TextField label="Topics" source="topics" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />{" "}
      </Datagrid>
    </List>
  );
};
