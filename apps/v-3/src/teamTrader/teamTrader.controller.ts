import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamTraderService } from "./teamTrader.service";
import { TeamTraderControllerBase } from "./base/teamTrader.controller.base";

@swagger.ApiTags("teamTraders")
@common.Controller("teamTraders")
export class TeamTraderController extends TeamTraderControllerBase {
  constructor(protected readonly service: TeamTraderService) {
    super(service);
  }
}
