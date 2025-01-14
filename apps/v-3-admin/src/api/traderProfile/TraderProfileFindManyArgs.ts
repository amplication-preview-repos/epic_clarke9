import { TraderProfileWhereInput } from "./TraderProfileWhereInput";
import { TraderProfileOrderByInput } from "./TraderProfileOrderByInput";

export type TraderProfileFindManyArgs = {
  where?: TraderProfileWhereInput;
  orderBy?: Array<TraderProfileOrderByInput>;
  skip?: number;
  take?: number;
};
