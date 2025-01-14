import { TraderSuspension as TTraderSuspension } from "../api/traderSuspension/TraderSuspension";

export const TRADERSUSPENSION_TITLE_FIELD = "createdById";

export const TraderSuspensionTitle = (record: TTraderSuspension): string => {
  return record.createdById?.toString() || String(record.id);
};
