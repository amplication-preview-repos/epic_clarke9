import { SortOrder } from "../../util/SortOrder";

export type ClapOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  setupId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  userId?: SortOrder;
};
