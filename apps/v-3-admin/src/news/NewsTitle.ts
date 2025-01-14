import { News as TNews } from "../api/news/News";

export const NEWS_TITLE_FIELD = "sourceName";

export const NewsTitle = (record: TNews): string => {
  return record.sourceName?.toString() || String(record.id);
};
