import { TraderProfile as TTraderProfile } from "../api/traderProfile/TraderProfile";

export const TRADERPROFILE_TITLE_FIELD = "content";

export const TraderProfileTitle = (record: TTraderProfile): string => {
  return record.content?.toString() || String(record.id);
};
