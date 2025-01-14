import { AppStoreProductPrice as TAppStoreProductPrice } from "../api/appStoreProductPrice/AppStoreProductPrice";

export const APPSTOREPRODUCTPRICE_TITLE_FIELD = "countryCode";

export const AppStoreProductPriceTitle = (
  record: TAppStoreProductPrice
): string => {
  return record.countryCode?.toString() || String(record.id);
};
