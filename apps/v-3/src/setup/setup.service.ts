import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetupServiceBase } from "./base/setup.service.base";

@Injectable()
export class SetupService extends SetupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
