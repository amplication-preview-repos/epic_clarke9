import { Module } from "@nestjs/common";
import { AppStoreProductPriceModuleBase } from "./base/appStoreProductPrice.module.base";
import { AppStoreProductPriceService } from "./appStoreProductPrice.service";
import { AppStoreProductPriceController } from "./appStoreProductPrice.controller";
import { AppStoreProductPriceResolver } from "./appStoreProductPrice.resolver";

@Module({
  imports: [AppStoreProductPriceModuleBase],
  controllers: [AppStoreProductPriceController],
  providers: [AppStoreProductPriceService, AppStoreProductPriceResolver],
  exports: [AppStoreProductPriceService],
})
export class AppStoreProductPriceModule {}
