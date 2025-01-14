import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NewsTitle } from "../news/NewsTitle";

export const NewsTextCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Full Text" source="fullText" />
        <TextInput label="Language" source="language" />
        <ReferenceInput source="news.id" reference="News" label="News">
          <SelectInput optionText={NewsTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
