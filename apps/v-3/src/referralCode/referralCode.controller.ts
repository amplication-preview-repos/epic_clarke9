import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferralCodeService } from "./referralCode.service";
import { ReferralCodeControllerBase } from "./base/referralCode.controller.base";

@swagger.ApiTags("referralCodes")
@common.Controller("referralCodes")
export class ReferralCodeController extends ReferralCodeControllerBase {
  constructor(protected readonly service: ReferralCodeService) {
    super(service);
  }
}
