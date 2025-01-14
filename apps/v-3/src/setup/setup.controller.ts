import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetupService } from "./setup.service";
import { SetupControllerBase } from "./base/setup.controller.base";

@swagger.ApiTags("setups")
@common.Controller("setups")
export class SetupController extends SetupControllerBase {
  constructor(protected readonly service: SetupService) {
    super(service);
  }
}
