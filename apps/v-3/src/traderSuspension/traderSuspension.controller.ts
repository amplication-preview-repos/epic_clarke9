import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraderSuspensionService } from "./traderSuspension.service";
import { TraderSuspensionControllerBase } from "./base/traderSuspension.controller.base";

@swagger.ApiTags("traderSuspensions")
@common.Controller("traderSuspensions")
export class TraderSuspensionController extends TraderSuspensionControllerBase {
  constructor(protected readonly service: TraderSuspensionService) {
    super(service);
  }
}
