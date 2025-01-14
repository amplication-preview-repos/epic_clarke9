import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AppStoreProductPriceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Activated At" source="activatedAt" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Currency" source="currency" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Product Code" source="productCode" />
      </SimpleForm>
    </Edit>
  );
};
