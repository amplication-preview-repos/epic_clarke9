import { Module } from "@nestjs/common";
import { UserSubscriptionModuleBase } from "./base/userSubscription.module.base";
import { UserSubscriptionService } from "./userSubscription.service";
import { UserSubscriptionController } from "./userSubscription.controller";
import { UserSubscriptionResolver } from "./userSubscription.resolver";

@Module({
  imports: [UserSubscriptionModuleBase],
  controllers: [UserSubscriptionController],
  providers: [UserSubscriptionService, UserSubscriptionResolver],
  exports: [UserSubscriptionService],
})
export class UserSubscriptionModule {}
