import { Module } from "@nestjs/common";
import { FollowNotifyModuleBase } from "./base/followNotify.module.base";
import { FollowNotifyService } from "./followNotify.service";
import { FollowNotifyController } from "./followNotify.controller";
import { FollowNotifyResolver } from "./followNotify.resolver";

@Module({
  imports: [FollowNotifyModuleBase],
  controllers: [FollowNotifyController],
  providers: [FollowNotifyService, FollowNotifyResolver],
  exports: [FollowNotifyService],
})
export class FollowNotifyModule {}
