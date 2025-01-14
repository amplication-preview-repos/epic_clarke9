import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { CALENDAR_TITLE_FIELD } from "../calendar/CalendarTitle";

export const CalendarTextShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Acro Expand" source="acroExpand" />
        <TextField label="Also Called" source="alsoCalled" />
        <ReferenceField
          label="Calendar"
          source="calendar.id"
          reference="Calendar"
        >
          <TextField source={CALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Cc Notes" source="ccNotes" />
        <TextField label="Cc Notice" source="ccNotice" />
        <TextField label="Country" source="country" />
        <TextField label="Derived Via" source="derivedVia" />
        <TextField label="Description" source="description" />
        <TextField label="Frequency" source="frequency" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Measures" source="measures" />
        <TextField label="Source" source="source" />
        <TextField label="Speaker" source="speaker" />
        <TextField label="Title" source="title" />
        <TextField label="Usual Effect" source="usualEffect" />
        <TextField label="Why Traderscare" source="whyTraderscare" />
      </SimpleShowLayout>
    </Show>
  );
};
