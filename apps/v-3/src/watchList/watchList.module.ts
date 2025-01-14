import { Module } from "@nestjs/common";
import { WatchListModuleBase } from "./base/watchList.module.base";
import { WatchListService } from "./watchList.service";
import { WatchListController } from "./watchList.controller";
import { WatchListResolver } from "./watchList.resolver";

@Module({
  imports: [WatchListModuleBase],
  controllers: [WatchListController],
  providers: [WatchListService, WatchListResolver],
  exports: [WatchListService],
})
export class WatchListModule {}
