import { InviteeWhereInput } from "./InviteeWhereInput";
import { InviteeOrderByInput } from "./InviteeOrderByInput";

export type InviteeFindManyArgs = {
  where?: InviteeWhereInput;
  orderBy?: Array<InviteeOrderByInput>;
  skip?: number;
  take?: number;
};
