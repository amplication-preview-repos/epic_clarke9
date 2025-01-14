import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CopyTradeOrderService } from "./copyTradeOrder.service";
import { CopyTradeOrderControllerBase } from "./base/copyTradeOrder.controller.base";

@swagger.ApiTags("copyTradeOrders")
@common.Controller("copyTradeOrders")
export class CopyTradeOrderController extends CopyTradeOrderControllerBase {
  constructor(protected readonly service: CopyTradeOrderService) {
    super(service);
  }
}
