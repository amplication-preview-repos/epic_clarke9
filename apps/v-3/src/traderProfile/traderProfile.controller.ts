import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraderProfileService } from "./traderProfile.service";
import { TraderProfileControllerBase } from "./base/traderProfile.controller.base";

@swagger.ApiTags("traderProfiles")
@common.Controller("traderProfiles")
export class TraderProfileController extends TraderProfileControllerBase {
  constructor(protected readonly service: TraderProfileService) {
    super(service);
  }
}
