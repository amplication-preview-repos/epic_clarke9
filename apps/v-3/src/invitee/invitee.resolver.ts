import * as graphql from "@nestjs/graphql";
import { InviteeResolverBase } from "./base/invitee.resolver.base";
import { Invitee } from "./base/Invitee";
import { InviteeService } from "./invitee.service";

@graphql.Resolver(() => Invitee)
export class InviteeResolver extends InviteeResolverBase {
  constructor(protected readonly service: InviteeService) {
    super(service);
  }
}
