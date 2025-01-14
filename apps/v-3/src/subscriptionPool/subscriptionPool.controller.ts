import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubscriptionPoolService } from "./subscriptionPool.service";
import { SubscriptionPoolControllerBase } from "./base/subscriptionPool.controller.base";

@swagger.ApiTags("subscriptionPools")
@common.Controller("subscriptionPools")
export class SubscriptionPoolController extends SubscriptionPoolControllerBase {
  constructor(protected readonly service: SubscriptionPoolService) {
    super(service);
  }
}
