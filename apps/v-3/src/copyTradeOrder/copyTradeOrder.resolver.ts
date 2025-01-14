import * as graphql from "@nestjs/graphql";
import { CopyTradeOrderResolverBase } from "./base/copyTradeOrder.resolver.base";
import { CopyTradeOrder } from "./base/CopyTradeOrder";
import { CopyTradeOrderService } from "./copyTradeOrder.service";

@graphql.Resolver(() => CopyTradeOrder)
export class CopyTradeOrderResolver extends CopyTradeOrderResolverBase {
  constructor(protected readonly service: CopyTradeOrderService) {
    super(service);
  }
}
