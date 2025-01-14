import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferralCodeServiceBase } from "./base/referralCode.service.base";

@Injectable()
export class ReferralCodeService extends ReferralCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
