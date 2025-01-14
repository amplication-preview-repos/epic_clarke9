import { SortOrder } from "../../util/SortOrder";

export type CanUpdateOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  language?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
