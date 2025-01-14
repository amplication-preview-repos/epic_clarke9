import { Module } from "@nestjs/common";
import { TraderSetupPnlPerformanceModuleBase } from "./base/traderSetupPnlPerformance.module.base";
import { TraderSetupPnlPerformanceService } from "./traderSetupPnlPerformance.service";
import { TraderSetupPnlPerformanceController } from "./traderSetupPnlPerformance.controller";
import { TraderSetupPnlPerformanceResolver } from "./traderSetupPnlPerformance.resolver";

@Module({
  imports: [TraderSetupPnlPerformanceModuleBase],
  controllers: [TraderSetupPnlPerformanceController],
  providers: [
    TraderSetupPnlPerformanceService,
    TraderSetupPnlPerformanceResolver,
  ],
  exports: [TraderSetupPnlPerformanceService],
})
export class TraderSetupPnlPerformanceModule {}
