import * as graphql from "@nestjs/graphql";
import { SubscriptionPoolResolverBase } from "./base/subscriptionPool.resolver.base";
import { SubscriptionPool } from "./base/SubscriptionPool";
import { SubscriptionPoolService } from "./subscriptionPool.service";

@graphql.Resolver(() => SubscriptionPool)
export class SubscriptionPoolResolver extends SubscriptionPoolResolverBase {
  constructor(protected readonly service: SubscriptionPoolService) {
    super(service);
  }
}
