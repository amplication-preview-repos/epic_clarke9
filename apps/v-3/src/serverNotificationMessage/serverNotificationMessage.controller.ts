import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServerNotificationMessageService } from "./serverNotificationMessage.service";
import { ServerNotificationMessageControllerBase } from "./base/serverNotificationMessage.controller.base";

@swagger.ApiTags("serverNotificationMessages")
@common.Controller("serverNotificationMessages")
export class ServerNotificationMessageController extends ServerNotificationMessageControllerBase {
  constructor(protected readonly service: ServerNotificationMessageService) {
    super(service);
  }
}
