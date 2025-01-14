import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WatchListService } from "./watchList.service";
import { WatchListControllerBase } from "./base/watchList.controller.base";

@swagger.ApiTags("watchLists")
@common.Controller("watchLists")
export class WatchListController extends WatchListControllerBase {
  constructor(protected readonly service: WatchListService) {
    super(service);
  }
}
