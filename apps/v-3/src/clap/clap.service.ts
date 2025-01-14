import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClapServiceBase } from "./base/clap.service.base";

@Injectable()
export class ClapService extends ClapServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
