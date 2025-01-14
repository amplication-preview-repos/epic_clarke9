import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InviteeServiceBase } from "./base/invitee.service.base";

@Injectable()
export class InviteeService extends InviteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
