import { Module } from "@nestjs/common";
import { TraderStatModuleBase } from "./base/traderStat.module.base";
import { TraderStatService } from "./traderStat.service";
import { TraderStatController } from "./traderStat.controller";
import { TraderStatResolver } from "./traderStat.resolver";

@Module({
  imports: [TraderStatModuleBase],
  controllers: [TraderStatController],
  providers: [TraderStatService, TraderStatResolver],
  exports: [TraderStatService],
})
export class TraderStatModule {}
