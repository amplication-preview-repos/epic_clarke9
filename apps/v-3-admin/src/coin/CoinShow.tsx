import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const CoinShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Futures" source="isFutures" />
        <BooleanField label="Is Spot" source="isSpot" />
        <TextField label="Name" source="name" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
      </SimpleShowLayout>
    </Show>
  );
};
