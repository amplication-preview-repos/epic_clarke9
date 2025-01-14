import { Module } from "@nestjs/common";
import { TeamTraderModuleBase } from "./base/teamTrader.module.base";
import { TeamTraderService } from "./teamTrader.service";
import { TeamTraderController } from "./teamTrader.controller";
import { TeamTraderResolver } from "./teamTrader.resolver";

@Module({
  imports: [TeamTraderModuleBase],
  controllers: [TeamTraderController],
  providers: [TeamTraderService, TeamTraderResolver],
  exports: [TeamTraderService],
})
export class TeamTraderModule {}
