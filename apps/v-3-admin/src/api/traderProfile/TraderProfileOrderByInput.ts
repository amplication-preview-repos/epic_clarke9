import { SortOrder } from "../../util/SortOrder";

export type TraderProfileOrderByInput = {
  content?: SortOrder;
  coverImage?: SortOrder;
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  isDeleted?: SortOrder;
  links?: SortOrder;
  traderId?: SortOrder;
  updatedAt?: SortOrder;
  updatedById?: SortOrder;
};
