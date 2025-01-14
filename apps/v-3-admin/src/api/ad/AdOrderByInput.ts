import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  adsGroupId?: SortOrder;
  adsId?: SortOrder;
  campaign?: SortOrder;
  company?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isDeleted?: SortOrder;
  lang?: SortOrder;
  pages?: SortOrder;
  sortNo?: SortOrder;
  startDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  url?: SortOrder;
  video?: SortOrder;
};
