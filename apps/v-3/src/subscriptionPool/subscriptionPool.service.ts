import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionPoolServiceBase } from "./base/subscriptionPool.service.base";

@Injectable()
export class SubscriptionPoolService extends SubscriptionPoolServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
