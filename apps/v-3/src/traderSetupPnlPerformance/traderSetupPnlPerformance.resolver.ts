import * as graphql from "@nestjs/graphql";
import { TraderSetupPnlPerformanceResolverBase } from "./base/traderSetupPnlPerformance.resolver.base";
import { TraderSetupPnlPerformance } from "./base/TraderSetupPnlPerformance";
import { TraderSetupPnlPerformanceService } from "./traderSetupPnlPerformance.service";

@graphql.Resolver(() => TraderSetupPnlPerformance)
export class TraderSetupPnlPerformanceResolver extends TraderSetupPnlPerformanceResolverBase {
  constructor(protected readonly service: TraderSetupPnlPerformanceService) {
    super(service);
  }
}
