import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NEWS_TITLE_FIELD } from "../news/NewsTitle";

export const NewsTextList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"NewsTexts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Full Text" source="fullText" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <ReferenceField label="News" source="news.id" reference="News">
          <TextField source={NEWS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Text" source="text" />
        <TextField label="Title" source="title" />{" "}
      </Datagrid>
    </List>
  );
};
