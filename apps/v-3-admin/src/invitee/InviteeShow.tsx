import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const InviteeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activated At" source="activatedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Market" source="market" />
        <TextField label="Uid" source="uid" />
      </SimpleShowLayout>
    </Show>
  );
};
