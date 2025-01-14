import { Module } from "@nestjs/common";
import { ServerNotificationMessageModuleBase } from "./base/serverNotificationMessage.module.base";
import { ServerNotificationMessageService } from "./serverNotificationMessage.service";
import { ServerNotificationMessageController } from "./serverNotificationMessage.controller";
import { ServerNotificationMessageResolver } from "./serverNotificationMessage.resolver";

@Module({
  imports: [ServerNotificationMessageModuleBase],
  controllers: [ServerNotificationMessageController],
  providers: [
    ServerNotificationMessageService,
    ServerNotificationMessageResolver,
  ],
  exports: [ServerNotificationMessageService],
})
export class ServerNotificationMessageModule {}
