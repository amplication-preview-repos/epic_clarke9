import { Module } from "@nestjs/common";
import { ClapModuleBase } from "./base/clap.module.base";
import { ClapService } from "./clap.service";
import { ClapController } from "./clap.controller";
import { ClapResolver } from "./clap.resolver";

@Module({
  imports: [ClapModuleBase],
  controllers: [ClapController],
  providers: [ClapService, ClapResolver],
  exports: [ClapService],
})
export class ClapModule {}
