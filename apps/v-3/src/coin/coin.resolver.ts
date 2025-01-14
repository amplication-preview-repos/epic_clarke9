import * as graphql from "@nestjs/graphql";
import { CoinResolverBase } from "./base/coin.resolver.base";
import { Coin } from "./base/Coin";
import { CoinService } from "./coin.service";

@graphql.Resolver(() => Coin)
export class CoinResolver extends CoinResolverBase {
  constructor(protected readonly service: CoinService) {
    super(service);
  }
}
