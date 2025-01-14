import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderSetupPnlPerformanceServiceBase } from "./base/traderSetupPnlPerformance.service.base";

@Injectable()
export class TraderSetupPnlPerformanceService extends TraderSetupPnlPerformanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
