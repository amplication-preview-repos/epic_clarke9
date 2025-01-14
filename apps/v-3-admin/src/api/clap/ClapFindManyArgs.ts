import { ClapWhereInput } from "./ClapWhereInput";
import { ClapOrderByInput } from "./ClapOrderByInput";

export type ClapFindManyArgs = {
  where?: ClapWhereInput;
  orderBy?: Array<ClapOrderByInput>;
  skip?: number;
  take?: number;
};
