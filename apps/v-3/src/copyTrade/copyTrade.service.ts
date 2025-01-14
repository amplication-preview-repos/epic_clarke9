import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CopyTradeServiceBase } from "./base/copyTrade.service.base";

@Injectable()
export class CopyTradeService extends CopyTradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
