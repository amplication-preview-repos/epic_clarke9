import { Module } from "@nestjs/common";
import { InviteeModuleBase } from "./base/invitee.module.base";
import { InviteeService } from "./invitee.service";
import { InviteeController } from "./invitee.controller";
import { InviteeResolver } from "./invitee.resolver";

@Module({
  imports: [InviteeModuleBase],
  controllers: [InviteeController],
  providers: [InviteeService, InviteeResolver],
  exports: [InviteeService],
})
export class InviteeModule {}
