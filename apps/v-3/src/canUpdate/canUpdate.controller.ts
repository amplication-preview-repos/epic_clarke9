import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CanUpdateService } from "./canUpdate.service";
import { CanUpdateControllerBase } from "./base/canUpdate.controller.base";

@swagger.ApiTags("canUpdates")
@common.Controller("canUpdates")
export class CanUpdateController extends CanUpdateControllerBase {
  constructor(protected readonly service: CanUpdateService) {
    super(service);
  }
}
