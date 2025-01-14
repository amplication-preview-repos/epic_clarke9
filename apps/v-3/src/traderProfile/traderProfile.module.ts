import { Module } from "@nestjs/common";
import { TraderProfileModuleBase } from "./base/traderProfile.module.base";
import { TraderProfileService } from "./traderProfile.service";
import { TraderProfileController } from "./traderProfile.controller";
import { TraderProfileResolver } from "./traderProfile.resolver";

@Module({
  imports: [TraderProfileModuleBase],
  controllers: [TraderProfileController],
  providers: [TraderProfileService, TraderProfileResolver],
  exports: [TraderProfileService],
})
export class TraderProfileModule {}
