import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsTextService } from "./newsText.service";
import { NewsTextControllerBase } from "./base/newsText.controller.base";

@swagger.ApiTags("newsTexts")
@common.Controller("newsTexts")
export class NewsTextController extends NewsTextControllerBase {
  constructor(protected readonly service: NewsTextService) {
    super(service);
  }
}
