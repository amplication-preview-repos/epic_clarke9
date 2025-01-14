import * as graphql from "@nestjs/graphql";
import { ReferralCodeResolverBase } from "./base/referralCode.resolver.base";
import { ReferralCode } from "./base/ReferralCode";
import { ReferralCodeService } from "./referralCode.service";

@graphql.Resolver(() => ReferralCode)
export class ReferralCodeResolver extends ReferralCodeResolverBase {
  constructor(protected readonly service: ReferralCodeService) {
    super(service);
  }
}
