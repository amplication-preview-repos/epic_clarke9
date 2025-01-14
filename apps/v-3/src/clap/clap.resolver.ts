import * as graphql from "@nestjs/graphql";
import { ClapResolverBase } from "./base/clap.resolver.base";
import { Clap } from "./base/Clap";
import { ClapService } from "./clap.service";

@graphql.Resolver(() => Clap)
export class ClapResolver extends ClapResolverBase {
  constructor(protected readonly service: ClapService) {
    super(service);
  }
}
