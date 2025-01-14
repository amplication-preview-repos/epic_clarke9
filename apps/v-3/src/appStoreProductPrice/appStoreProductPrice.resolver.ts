import * as graphql from "@nestjs/graphql";
import { AppStoreProductPriceResolverBase } from "./base/appStoreProductPrice.resolver.base";
import { AppStoreProductPrice } from "./base/AppStoreProductPrice";
import { AppStoreProductPriceService } from "./appStoreProductPrice.service";

@graphql.Resolver(() => AppStoreProductPrice)
export class AppStoreProductPriceResolver extends AppStoreProductPriceResolverBase {
  constructor(protected readonly service: AppStoreProductPriceService) {
    super(service);
  }
}
