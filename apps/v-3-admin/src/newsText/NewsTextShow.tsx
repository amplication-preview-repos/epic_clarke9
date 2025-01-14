import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { NEWS_TITLE_FIELD } from "../news/NewsTitle";

export const NewsTextShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Full Text" source="fullText" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <ReferenceField label="News" source="news.id" reference="News">
          <TextField source={NEWS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
