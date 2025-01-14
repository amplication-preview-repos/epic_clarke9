import { SortOrder } from "../../util/SortOrder";

export type TraderSuspensionOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  suspensionEndDate?: SortOrder;
  suspensionStartDate?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
