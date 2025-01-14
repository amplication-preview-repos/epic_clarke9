import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AppStoreProductPriceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Currency" source="currency" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Product Code" source="productCode" />
      </SimpleForm>
    </Create>
  );
};
