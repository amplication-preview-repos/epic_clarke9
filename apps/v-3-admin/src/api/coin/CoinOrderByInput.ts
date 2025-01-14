import { SortOrder } from "../../util/SortOrder";

export type CoinOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  isDeleted?: SortOrder;
  isFutures?: SortOrder;
  isSpot?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
