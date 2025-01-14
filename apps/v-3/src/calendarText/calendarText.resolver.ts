import * as graphql from "@nestjs/graphql";
import { CalendarTextResolverBase } from "./base/calendarText.resolver.base";
import { CalendarText } from "./base/CalendarText";
import { CalendarTextService } from "./calendarText.service";

@graphql.Resolver(() => CalendarText)
export class CalendarTextResolver extends CalendarTextResolverBase {
  constructor(protected readonly service: CalendarTextService) {
    super(service);
  }
}
