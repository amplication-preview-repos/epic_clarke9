import { WatchList as TWatchList } from "../api/watchList/WatchList";

export const WATCHLIST_TITLE_FIELD = "createdById";

export const WatchListTitle = (record: TWatchList): string => {
  return record.createdById?.toString() || String(record.id);
};
