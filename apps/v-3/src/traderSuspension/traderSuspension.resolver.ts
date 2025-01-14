import * as graphql from "@nestjs/graphql";
import { TraderSuspensionResolverBase } from "./base/traderSuspension.resolver.base";
import { TraderSuspension } from "./base/TraderSuspension";
import { TraderSuspensionService } from "./traderSuspension.service";

@graphql.Resolver(() => TraderSuspension)
export class TraderSuspensionResolver extends TraderSuspensionResolverBase {
  constructor(protected readonly service: TraderSuspensionService) {
    super(service);
  }
}
