import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderSuspensionServiceBase } from "./base/traderSuspension.service.base";

@Injectable()
export class TraderSuspensionService extends TraderSuspensionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
