import { Module } from "@nestjs/common";
import { ReferralCodeModuleBase } from "./base/referralCode.module.base";
import { ReferralCodeService } from "./referralCode.service";
import { ReferralCodeController } from "./referralCode.controller";
import { ReferralCodeResolver } from "./referralCode.resolver";

@Module({
  imports: [ReferralCodeModuleBase],
  controllers: [ReferralCodeController],
  providers: [ReferralCodeService, ReferralCodeResolver],
  exports: [ReferralCodeService],
})
export class ReferralCodeModule {}
