import * as graphql from "@nestjs/graphql";
import { CopyTradeResolverBase } from "./base/copyTrade.resolver.base";
import { CopyTrade } from "./base/CopyTrade";
import { CopyTradeService } from "./copyTrade.service";

@graphql.Resolver(() => CopyTrade)
export class CopyTradeResolver extends CopyTradeResolverBase {
  constructor(protected readonly service: CopyTradeService) {
    super(service);
  }
}
