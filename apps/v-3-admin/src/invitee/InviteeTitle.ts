import { Invitee as TInvitee } from "../api/invitee/Invitee";

export const INVITEE_TITLE_FIELD = "market";

export const InviteeTitle = (record: TInvitee): string => {
  return record.market?.toString() || String(record.id);
};
