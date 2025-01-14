import * as graphql from "@nestjs/graphql";
import { ServerNotificationMessageResolverBase } from "./base/serverNotificationMessage.resolver.base";
import { ServerNotificationMessage } from "./base/ServerNotificationMessage";
import { ServerNotificationMessageService } from "./serverNotificationMessage.service";

@graphql.Resolver(() => ServerNotificationMessage)
export class ServerNotificationMessageResolver extends ServerNotificationMessageResolverBase {
  constructor(protected readonly service: ServerNotificationMessageService) {
    super(service);
  }
}
