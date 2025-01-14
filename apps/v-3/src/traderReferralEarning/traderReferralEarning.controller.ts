import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraderReferralEarningService } from "./traderReferralEarning.service";
import { TraderReferralEarningControllerBase } from "./base/traderReferralEarning.controller.base";

@swagger.ApiTags("traderReferralEarnings")
@common.Controller("traderReferralEarnings")
export class TraderReferralEarningController extends TraderReferralEarningControllerBase {
  constructor(protected readonly service: TraderReferralEarningService) {
    super(service);
  }
}
