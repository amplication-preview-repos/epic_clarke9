import { Module } from "@nestjs/common";
import { CanUpdateModuleBase } from "./base/canUpdate.module.base";
import { CanUpdateService } from "./canUpdate.service";
import { CanUpdateController } from "./canUpdate.controller";
import { CanUpdateResolver } from "./canUpdate.resolver";

@Module({
  imports: [CanUpdateModuleBase],
  controllers: [CanUpdateController],
  providers: [CanUpdateService, CanUpdateResolver],
  exports: [CanUpdateService],
})
export class CanUpdateModule {}
