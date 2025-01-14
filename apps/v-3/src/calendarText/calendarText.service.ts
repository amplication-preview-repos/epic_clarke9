import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarTextServiceBase } from "./base/calendarText.service.base";

@Injectable()
export class CalendarTextService extends CalendarTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
