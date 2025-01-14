import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSubscriptionService } from "./userSubscription.service";
import { UserSubscriptionControllerBase } from "./base/userSubscription.controller.base";

@swagger.ApiTags("userSubscriptions")
@common.Controller("userSubscriptions")
export class UserSubscriptionController extends UserSubscriptionControllerBase {
  constructor(protected readonly service: UserSubscriptionService) {
    super(service);
  }
}
