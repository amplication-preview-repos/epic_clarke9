import { WatchListWhereInput } from "./WatchListWhereInput";
import { WatchListOrderByInput } from "./WatchListOrderByInput";

export type WatchListFindManyArgs = {
  where?: WatchListWhereInput;
  orderBy?: Array<WatchListOrderByInput>;
  skip?: number;
  take?: number;
};
