import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  date?: SortOrder;
  fullText?: SortOrder;
  id?: SortOrder;
  imageURL?: SortOrder;
  isDeleted?: SortOrder;
  newsURL?: SortOrder;
  sentiment?: SortOrder;
  sourceName?: SortOrder;
  text?: SortOrder;
  thumbnailURL?: SortOrder;
  tickers?: SortOrder;
  title?: SortOrder;
  topics?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
