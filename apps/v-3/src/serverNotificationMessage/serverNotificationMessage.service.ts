import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServerNotificationMessageServiceBase } from "./base/serverNotificationMessage.service.base";

@Injectable()
export class ServerNotificationMessageService extends ServerNotificationMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
