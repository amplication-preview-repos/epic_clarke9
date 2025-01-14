import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const AppStoreProductPriceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Activated At" source="activatedAt" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="Currency" source="currency" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Product Code" source="productCode" />
      </SimpleShowLayout>
    </Show>
  );
};
