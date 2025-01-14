import { SetupWhereInput } from "./SetupWhereInput";
import { SetupOrderByInput } from "./SetupOrderByInput";

export type SetupFindManyArgs = {
  where?: SetupWhereInput;
  orderBy?: Array<SetupOrderByInput>;
  skip?: number;
  take?: number;
};
