import * as graphql from "@nestjs/graphql";
import { UserSubscriptionResolverBase } from "./base/userSubscription.resolver.base";
import { UserSubscription } from "./base/UserSubscription";
import { UserSubscriptionService } from "./userSubscription.service";

@graphql.Resolver(() => UserSubscription)
export class UserSubscriptionResolver extends UserSubscriptionResolverBase {
  constructor(protected readonly service: UserSubscriptionService) {
    super(service);
  }
}
