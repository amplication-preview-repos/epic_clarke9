import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NewsTextTitle } from "../newsText/NewsTextTitle";

export const NewsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Created By Id" source="createdById" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Full Text" source="fullText" />
        <TextInput label="Image Url" source="imageURL" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <ReferenceArrayInput source="newsText" reference="NewsText">
          <SelectArrayInput
            optionText={NewsTextTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="News Url" source="newsURL" />
        <TextInput label="Sentiment" source="sentiment" />
        <TextInput label="Source Name" source="sourceName" />
        <TextInput label="Text" source="text" />
        <TextInput label="Thumbnail Url" source="thumbnailURL" />
        <TextInput label="Tickers" source="tickers" />
        <TextInput label="Title" source="title" />
        <TextInput label="Topics" source="topics" />
        <TextInput label="Type Field" source="typeField" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
      </SimpleForm>
    </Edit>
  );
};
