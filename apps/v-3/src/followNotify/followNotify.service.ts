import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FollowNotifyServiceBase } from "./base/followNotify.service.base";

@Injectable()
export class FollowNotifyService extends FollowNotifyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
