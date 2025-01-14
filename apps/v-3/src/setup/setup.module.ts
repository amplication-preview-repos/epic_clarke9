import { Module } from "@nestjs/common";
import { SetupModuleBase } from "./base/setup.module.base";
import { SetupService } from "./setup.service";
import { SetupController } from "./setup.controller";
import { SetupResolver } from "./setup.resolver";

@Module({
  imports: [SetupModuleBase],
  controllers: [SetupController],
  providers: [SetupService, SetupResolver],
  exports: [SetupService],
})
export class SetupModule {}
