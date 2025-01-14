import * as graphql from "@nestjs/graphql";
import { TraderProfileResolverBase } from "./base/traderProfile.resolver.base";
import { TraderProfile } from "./base/TraderProfile";
import { TraderProfileService } from "./traderProfile.service";

@graphql.Resolver(() => TraderProfile)
export class TraderProfileResolver extends TraderProfileResolverBase {
  constructor(protected readonly service: TraderProfileService) {
    super(service);
  }
}
