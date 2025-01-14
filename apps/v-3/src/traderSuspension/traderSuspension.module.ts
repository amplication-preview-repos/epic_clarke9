import { Module } from "@nestjs/common";
import { TraderSuspensionModuleBase } from "./base/traderSuspension.module.base";
import { TraderSuspensionService } from "./traderSuspension.service";
import { TraderSuspensionController } from "./traderSuspension.controller";
import { TraderSuspensionResolver } from "./traderSuspension.resolver";

@Module({
  imports: [TraderSuspensionModuleBase],
  controllers: [TraderSuspensionController],
  providers: [TraderSuspensionService, TraderSuspensionResolver],
  exports: [TraderSuspensionService],
})
export class TraderSuspensionModule {}
