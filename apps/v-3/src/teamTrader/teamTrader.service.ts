import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamTraderServiceBase } from "./base/teamTrader.service.base";

@Injectable()
export class TeamTraderService extends TeamTraderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
