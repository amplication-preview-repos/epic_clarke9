import { Module } from "@nestjs/common";
import { SetupValueHistoryModuleBase } from "./base/setupValueHistory.module.base";
import { SetupValueHistoryService } from "./setupValueHistory.service";
import { SetupValueHistoryController } from "./setupValueHistory.controller";
import { SetupValueHistoryResolver } from "./setupValueHistory.resolver";

@Module({
  imports: [SetupValueHistoryModuleBase],
  controllers: [SetupValueHistoryController],
  providers: [SetupValueHistoryService, SetupValueHistoryResolver],
  exports: [SetupValueHistoryService],
})
export class SetupValueHistoryModule {}
