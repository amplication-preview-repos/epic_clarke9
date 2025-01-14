import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NEWS_TITLE_FIELD } from "./NewsTitle";

export const NewsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Updated By Id" source="updatedById" />
        <ReferenceManyField
          reference="NewsText"
          target="newsId"
          label="NewsTexts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Full Text" source="fullText" />
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <ReferenceField label="News" source="news.id" reference="News">
              <TextField source={NEWS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
