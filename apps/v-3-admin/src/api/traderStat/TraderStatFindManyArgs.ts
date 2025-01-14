import { TraderStatWhereInput } from "./TraderStatWhereInput";
import { TraderStatOrderByInput } from "./TraderStatOrderByInput";

export type TraderStatFindManyArgs = {
  where?: TraderStatWhereInput;
  orderBy?: Array<TraderStatOrderByInput>;
  skip?: number;
  take?: number;
};
