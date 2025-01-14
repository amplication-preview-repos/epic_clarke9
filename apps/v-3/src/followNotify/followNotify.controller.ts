import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FollowNotifyService } from "./followNotify.service";
import { FollowNotifyControllerBase } from "./base/followNotify.controller.base";

@swagger.ApiTags("followNotifies")
@common.Controller("followNotifies")
export class FollowNotifyController extends FollowNotifyControllerBase {
  constructor(protected readonly service: FollowNotifyService) {
    super(service);
  }
}
