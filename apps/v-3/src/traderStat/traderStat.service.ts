import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderStatServiceBase } from "./base/traderStat.service.base";

@Injectable()
export class TraderStatService extends TraderStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
