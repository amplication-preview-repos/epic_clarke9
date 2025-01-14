import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppStoreProductPriceService } from "./appStoreProductPrice.service";
import { AppStoreProductPriceControllerBase } from "./base/appStoreProductPrice.controller.base";

@swagger.ApiTags("appStoreProductPrices")
@common.Controller("appStoreProductPrices")
export class AppStoreProductPriceController extends AppStoreProductPriceControllerBase {
  constructor(protected readonly service: AppStoreProductPriceService) {
    super(service);
  }
}
