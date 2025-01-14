import { TraderStat as TTraderStat } from "../api/traderStat/TraderStat";

export const TRADERSTAT_TITLE_FIELD = "id";

export const TraderStatTitle = (record: TTraderStat): string => {
  return record.id?.toString() || String(record.id);
};
