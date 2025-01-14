import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CopyTradeService } from "./copyTrade.service";
import { CopyTradeControllerBase } from "./base/copyTrade.controller.base";

@swagger.ApiTags("copyTrades")
@common.Controller("copyTrades")
export class CopyTradeController extends CopyTradeControllerBase {
  constructor(protected readonly service: CopyTradeService) {
    super(service);
  }
}
