import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarTextService } from "./calendarText.service";
import { CalendarTextControllerBase } from "./base/calendarText.controller.base";

@swagger.ApiTags("calendarTexts")
@common.Controller("calendarTexts")
export class CalendarTextController extends CalendarTextControllerBase {
  constructor(protected readonly service: CalendarTextService) {
    super(service);
  }
}
