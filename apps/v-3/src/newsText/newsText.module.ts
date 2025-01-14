import { Module } from "@nestjs/common";
import { NewsTextModuleBase } from "./base/newsText.module.base";
import { NewsTextService } from "./newsText.service";
import { NewsTextController } from "./newsText.controller";
import { NewsTextResolver } from "./newsText.resolver";

@Module({
  imports: [NewsTextModuleBase],
  controllers: [NewsTextController],
  providers: [NewsTextService, NewsTextResolver],
  exports: [NewsTextService],
})
export class NewsTextModule {}
