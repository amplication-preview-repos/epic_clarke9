import { Module } from "@nestjs/common";
import { CopyTradeOrderModuleBase } from "./base/copyTradeOrder.module.base";
import { CopyTradeOrderService } from "./copyTradeOrder.service";
import { CopyTradeOrderController } from "./copyTradeOrder.controller";
import { CopyTradeOrderResolver } from "./copyTradeOrder.resolver";

@Module({
  imports: [CopyTradeOrderModuleBase],
  controllers: [CopyTradeOrderController],
  providers: [CopyTradeOrderService, CopyTradeOrderResolver],
  exports: [CopyTradeOrderService],
})
export class CopyTradeOrderModule {}
