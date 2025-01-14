import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarService } from "./calendar.service";
import { CalendarControllerBase } from "./base/calendar.controller.base";

@swagger.ApiTags("calendars")
@common.Controller("calendars")
export class CalendarController extends CalendarControllerBase {
  constructor(protected readonly service: CalendarService) {
    super(service);
  }
}
