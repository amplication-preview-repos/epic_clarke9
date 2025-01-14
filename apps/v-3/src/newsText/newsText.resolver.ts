import * as graphql from "@nestjs/graphql";
import { NewsTextResolverBase } from "./base/newsText.resolver.base";
import { NewsText } from "./base/NewsText";
import { NewsTextService } from "./newsText.service";

@graphql.Resolver(() => NewsText)
export class NewsTextResolver extends NewsTextResolverBase {
  constructor(protected readonly service: NewsTextService) {
    super(service);
  }
}
