import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraderStatService } from "./traderStat.service";
import { TraderStatControllerBase } from "./base/traderStat.controller.base";

@swagger.ApiTags("traderStats")
@common.Controller("traderStats")
export class TraderStatController extends TraderStatControllerBase {
  constructor(protected readonly service: TraderStatService) {
    super(service);
  }
}
