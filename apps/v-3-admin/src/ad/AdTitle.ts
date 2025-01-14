import { Ad as TAd } from "../api/ad/Ad";

export const AD_TITLE_FIELD = "title";

export const AdTitle = (record: TAd): string => {
  return record.title?.toString() || String(record.id);
};
