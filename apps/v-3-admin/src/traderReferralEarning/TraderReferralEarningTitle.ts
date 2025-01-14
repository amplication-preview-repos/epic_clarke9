import { TraderReferralEarning as TTraderReferralEarning } from "../api/traderReferralEarning/TraderReferralEarning";

export const TRADERREFERRALEARNING_TITLE_FIELD = "createdById";

export const TraderReferralEarningTitle = (
  record: TTraderReferralEarning
): string => {
  return record.createdById?.toString() || String(record.id);
};
