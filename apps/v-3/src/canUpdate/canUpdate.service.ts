import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CanUpdateServiceBase } from "./base/canUpdate.service.base";

@Injectable()
export class CanUpdateService extends CanUpdateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
