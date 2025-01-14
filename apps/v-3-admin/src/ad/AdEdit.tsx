import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const AdEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ads Group Id" source="adsGroupId" />
        <TextInput label="Ads Id" source="adsId" />
        <TextInput label="Campaign" source="campaign" />
        <TextInput label="Company" source="company" />
        <TextInput label="Content" source="content" />
        <TextInput label="Created By Id" source="createdById" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Image" source="image" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <TextInput label="Lang" source="lang" />
        <TextInput label="Pages" source="pages" />
        <NumberInput step={1} label="Sort No" source="sortNo" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="Title" source="title" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <TextInput label="Url" source="url" />
        <TextInput label="Video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
