import { ReferralCode as TReferralCode } from "../api/referralCode/ReferralCode";

export const REFERRALCODE_TITLE_FIELD = "code";

export const ReferralCodeTitle = (record: TReferralCode): string => {
  return record.code?.toString() || String(record.id);
};
