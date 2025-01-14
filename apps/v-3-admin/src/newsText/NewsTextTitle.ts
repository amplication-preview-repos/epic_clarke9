import { NewsText as TNewsText } from "../api/newsText/NewsText";

export const NEWSTEXT_TITLE_FIELD = "title";

export const NewsTextTitle = (record: TNewsText): string => {
  return record.title?.toString() || String(record.id);
};
