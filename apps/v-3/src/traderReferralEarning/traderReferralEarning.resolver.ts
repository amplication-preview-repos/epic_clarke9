import * as graphql from "@nestjs/graphql";
import { TraderReferralEarningResolverBase } from "./base/traderReferralEarning.resolver.base";
import { TraderReferralEarning } from "./base/TraderReferralEarning";
import { TraderReferralEarningService } from "./traderReferralEarning.service";

@graphql.Resolver(() => TraderReferralEarning)
export class TraderReferralEarningResolver extends TraderReferralEarningResolverBase {
  constructor(protected readonly service: TraderReferralEarningService) {
    super(service);
  }
}
