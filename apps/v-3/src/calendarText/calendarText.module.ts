import { Module } from "@nestjs/common";
import { CalendarTextModuleBase } from "./base/calendarText.module.base";
import { CalendarTextService } from "./calendarText.service";
import { CalendarTextController } from "./calendarText.controller";
import { CalendarTextResolver } from "./calendarText.resolver";

@Module({
  imports: [CalendarTextModuleBase],
  controllers: [CalendarTextController],
  providers: [CalendarTextService, CalendarTextResolver],
  exports: [CalendarTextService],
})
export class CalendarTextModule {}
