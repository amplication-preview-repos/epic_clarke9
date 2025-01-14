import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InviteeService } from "./invitee.service";
import { InviteeControllerBase } from "./base/invitee.controller.base";

@swagger.ApiTags("invitees")
@common.Controller("invitees")
export class InviteeController extends InviteeControllerBase {
  constructor(protected readonly service: InviteeService) {
    super(service);
  }
}
