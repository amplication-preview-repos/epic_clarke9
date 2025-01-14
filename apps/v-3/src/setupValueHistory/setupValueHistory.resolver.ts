import * as graphql from "@nestjs/graphql";
import { SetupValueHistoryResolverBase } from "./base/setupValueHistory.resolver.base";
import { SetupValueHistory } from "./base/SetupValueHistory";
import { SetupValueHistoryService } from "./setupValueHistory.service";

@graphql.Resolver(() => SetupValueHistory)
export class SetupValueHistoryResolver extends SetupValueHistoryResolverBase {
  constructor(protected readonly service: SetupValueHistoryService) {
    super(service);
  }
}
