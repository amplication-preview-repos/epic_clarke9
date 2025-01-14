import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TraderProfileServiceBase } from "./base/traderProfile.service.base";

@Injectable()
export class TraderProfileService extends TraderProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
