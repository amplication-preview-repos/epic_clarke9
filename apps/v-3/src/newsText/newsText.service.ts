import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewsTextServiceBase } from "./base/newsText.service.base";

@Injectable()
export class NewsTextService extends NewsTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
