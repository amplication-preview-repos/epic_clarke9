import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AppStoreProductPriceServiceBase } from "./base/appStoreProductPrice.service.base";

@Injectable()
export class AppStoreProductPriceService extends AppStoreProductPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
