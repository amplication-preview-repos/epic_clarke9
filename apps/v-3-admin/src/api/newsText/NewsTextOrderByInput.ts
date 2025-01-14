import { SortOrder } from "../../util/SortOrder";

export type NewsTextOrderByInput = {
  fullText?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  newsId?: SortOrder;
  text?: SortOrder;
  title?: SortOrder;
};
