import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderReferralEarningServiceBase } from "./base/traderReferralEarning.service.base";

@Injectable()
export class TraderReferralEarningService extends TraderReferralEarningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
