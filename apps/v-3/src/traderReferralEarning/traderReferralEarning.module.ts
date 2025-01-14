import { Module } from "@nestjs/common";
import { TraderReferralEarningModuleBase } from "./base/traderReferralEarning.module.base";
import { TraderReferralEarningService } from "./traderReferralEarning.service";
import { TraderReferralEarningController } from "./traderReferralEarning.controller";
import { TraderReferralEarningResolver } from "./traderReferralEarning.resolver";

@Module({
  imports: [TraderReferralEarningModuleBase],
  controllers: [TraderReferralEarningController],
  providers: [TraderReferralEarningService, TraderReferralEarningResolver],
  exports: [TraderReferralEarningService],
})
export class TraderReferralEarningModule {}
