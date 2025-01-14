import * as graphql from "@nestjs/graphql";
import { CalendarResolverBase } from "./base/calendar.resolver.base";
import { Calendar } from "./base/Calendar";
import { CalendarService } from "./calendar.service";

@graphql.Resolver(() => Calendar)
export class CalendarResolver extends CalendarResolverBase {
  constructor(protected readonly service: CalendarService) {
    super(service);
  }
}
