import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetupValueHistoryServiceBase } from "./base/setupValueHistory.service.base";

@Injectable()
export class SetupValueHistoryService extends SetupValueHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
