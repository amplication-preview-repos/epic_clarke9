import * as graphql from "@nestjs/graphql";
import { TraderStatResolverBase } from "./base/traderStat.resolver.base";
import { TraderStat } from "./base/TraderStat";
import { TraderStatService } from "./traderStat.service";

@graphql.Resolver(() => TraderStat)
export class TraderStatResolver extends TraderStatResolverBase {
  constructor(protected readonly service: TraderStatService) {
    super(service);
  }
}
