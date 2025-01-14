import * as graphql from "@nestjs/graphql";
import { SetupResolverBase } from "./base/setup.resolver.base";
import { Setup } from "./base/Setup";
import { SetupService } from "./setup.service";

@graphql.Resolver(() => Setup)
export class SetupResolver extends SetupResolverBase {
  constructor(protected readonly service: SetupService) {
    super(service);
  }
}
