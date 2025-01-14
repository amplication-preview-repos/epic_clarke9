import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type AppStoreProductPriceWhereInput = {
  activatedAt?: DateTimeFilter;
  countryCode?: StringFilter;
  currency?: StringFilter;
  id?: StringFilter;
  price?: FloatFilter;
  productCode?: StringFilter;
};
