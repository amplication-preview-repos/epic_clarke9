import { Module } from "@nestjs/common";
import { CopyTradeModuleBase } from "./base/copyTrade.module.base";
import { CopyTradeService } from "./copyTrade.service";
import { CopyTradeController } from "./copyTrade.controller";
import { CopyTradeResolver } from "./copyTrade.resolver";

@Module({
  imports: [CopyTradeModuleBase],
  controllers: [CopyTradeController],
  providers: [CopyTradeService, CopyTradeResolver],
  exports: [CopyTradeService],
})
export class CopyTradeModule {}
