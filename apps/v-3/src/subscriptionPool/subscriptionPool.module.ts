import { Module } from "@nestjs/common";
import { SubscriptionPoolModuleBase } from "./base/subscriptionPool.module.base";
import { SubscriptionPoolService } from "./subscriptionPool.service";
import { SubscriptionPoolController } from "./subscriptionPool.controller";
import { SubscriptionPoolResolver } from "./subscriptionPool.resolver";

@Module({
  imports: [SubscriptionPoolModuleBase],
  controllers: [SubscriptionPoolController],
  providers: [SubscriptionPoolService, SubscriptionPoolResolver],
  exports: [SubscriptionPoolService],
})
export class SubscriptionPoolModule {}
