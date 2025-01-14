import { SortOrder } from "../../util/SortOrder";

export type ReferralCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDeleted?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
