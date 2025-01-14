import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSubscriptionServiceBase } from "./base/userSubscription.service.base";

@Injectable()
export class UserSubscriptionService extends UserSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
