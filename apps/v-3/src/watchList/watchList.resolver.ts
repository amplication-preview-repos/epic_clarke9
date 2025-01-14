import * as graphql from "@nestjs/graphql";
import { WatchListResolverBase } from "./base/watchList.resolver.base";
import { WatchList } from "./base/WatchList";
import { WatchListService } from "./watchList.service";

@graphql.Resolver(() => WatchList)
export class WatchListResolver extends WatchListResolverBase {
  constructor(protected readonly service: WatchListService) {
    super(service);
  }
}
