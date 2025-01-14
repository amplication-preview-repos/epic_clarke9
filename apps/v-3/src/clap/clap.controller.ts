import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClapService } from "./clap.service";
import { ClapControllerBase } from "./base/clap.controller.base";

@swagger.ApiTags("claps")
@common.Controller("claps")
export class ClapController extends ClapControllerBase {
  constructor(protected readonly service: ClapService) {
    super(service);
  }
}
