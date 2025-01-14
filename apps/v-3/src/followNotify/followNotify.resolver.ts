import * as graphql from "@nestjs/graphql";
import { FollowNotifyResolverBase } from "./base/followNotify.resolver.base";
import { FollowNotify } from "./base/FollowNotify";
import { FollowNotifyService } from "./followNotify.service";

@graphql.Resolver(() => FollowNotify)
export class FollowNotifyResolver extends FollowNotifyResolverBase {
  constructor(protected readonly service: FollowNotifyService) {
    super(service);
  }
}
