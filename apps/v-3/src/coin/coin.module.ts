import { Module } from "@nestjs/common";
import { CoinModuleBase } from "./base/coin.module.base";
import { CoinService } from "./coin.service";
import { CoinController } from "./coin.controller";
import { CoinResolver } from "./coin.resolver";

@Module({
  imports: [CoinModuleBase],
  controllers: [CoinController],
  providers: [CoinService, CoinResolver],
  exports: [CoinService],
})
export class CoinModule {}
