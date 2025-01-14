import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoinServiceBase } from "./base/coin.service.base";

@Injectable()
export class CoinService extends CoinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
