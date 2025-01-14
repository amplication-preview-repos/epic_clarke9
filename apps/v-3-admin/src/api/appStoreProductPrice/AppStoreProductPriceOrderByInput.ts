import { SortOrder } from "../../util/SortOrder";

export type AppStoreProductPriceOrderByInput = {
  activatedAt?: SortOrder;
  countryCode?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productCode?: SortOrder;
};
