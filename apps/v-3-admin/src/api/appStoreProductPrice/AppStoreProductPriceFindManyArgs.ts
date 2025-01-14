import { AppStoreProductPriceWhereInput } from "./AppStoreProductPriceWhereInput";
import { AppStoreProductPriceOrderByInput } from "./AppStoreProductPriceOrderByInput";

export type AppStoreProductPriceFindManyArgs = {
  where?: AppStoreProductPriceWhereInput;
  orderBy?: Array<AppStoreProductPriceOrderByInput>;
  skip?: number;
  take?: number;
};
