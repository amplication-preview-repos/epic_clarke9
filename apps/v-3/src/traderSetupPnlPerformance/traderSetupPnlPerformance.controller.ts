import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraderSetupPnlPerformanceService } from "./traderSetupPnlPerformance.service";
import { TraderSetupPnlPerformanceControllerBase } from "./base/traderSetupPnlPerformance.controller.base";

@swagger.ApiTags("traderSetupPnlPerformances")
@common.Controller("traderSetupPnlPerformances")
export class TraderSetupPnlPerformanceController extends TraderSetupPnlPerformanceControllerBase {
  constructor(protected readonly service: TraderSetupPnlPerformanceService) {
    super(service);
  }
}
