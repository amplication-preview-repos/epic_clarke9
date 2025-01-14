import { SortOrder } from "../../util/SortOrder";

export type TeamTraderOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
  traderId?: SortOrder;
};
