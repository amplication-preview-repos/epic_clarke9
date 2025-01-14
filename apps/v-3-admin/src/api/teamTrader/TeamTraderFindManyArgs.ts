import { TeamTraderWhereInput } from "./TeamTraderWhereInput";
import { TeamTraderOrderByInput } from "./TeamTraderOrderByInput";

export type TeamTraderFindManyArgs = {
  where?: TeamTraderWhereInput;
  orderBy?: Array<TeamTraderOrderByInput>;
  skip?: number;
  take?: number;
};
