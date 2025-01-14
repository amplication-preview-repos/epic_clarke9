import * as graphql from "@nestjs/graphql";
import { CanUpdateResolverBase } from "./base/canUpdate.resolver.base";
import { CanUpdate } from "./base/CanUpdate";
import { CanUpdateService } from "./canUpdate.service";

@graphql.Resolver(() => CanUpdate)
export class CanUpdateResolver extends CanUpdateResolverBase {
  constructor(protected readonly service: CanUpdateService) {
    super(service);
  }
}
