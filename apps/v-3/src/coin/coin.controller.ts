import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoinService } from "./coin.service";
import { CoinControllerBase } from "./base/coin.controller.base";

@swagger.ApiTags("coins")
@common.Controller("coins")
export class CoinController extends CoinControllerBase {
  constructor(protected readonly service: CoinService) {
    super(service);
  }
}
