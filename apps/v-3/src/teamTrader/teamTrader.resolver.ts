import * as graphql from "@nestjs/graphql";
import { TeamTraderResolverBase } from "./base/teamTrader.resolver.base";
import { TeamTrader } from "./base/TeamTrader";
import { TeamTraderService } from "./teamTrader.service";

@graphql.Resolver(() => TeamTrader)
export class TeamTraderResolver extends TeamTraderResolverBase {
  constructor(protected readonly service: TeamTraderService) {
    super(service);
  }
}
