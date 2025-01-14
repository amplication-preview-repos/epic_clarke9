import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetupValueHistoryService } from "./setupValueHistory.service";
import { SetupValueHistoryControllerBase } from "./base/setupValueHistory.controller.base";

@swagger.ApiTags("setupValueHistories")
@common.Controller("setupValueHistories")
export class SetupValueHistoryController extends SetupValueHistoryControllerBase {
  constructor(protected readonly service: SetupValueHistoryService) {
    super(service);
  }
}
