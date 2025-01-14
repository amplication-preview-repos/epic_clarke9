import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  setupId?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  userId?: SortOrder;
};
