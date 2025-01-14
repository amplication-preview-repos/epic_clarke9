import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CopyTradeOrderServiceBase } from "./base/copyTradeOrder.service.base";

@Injectable()
export class CopyTradeOrderService extends CopyTradeOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
