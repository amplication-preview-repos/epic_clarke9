import { NewsTextWhereInput } from "./NewsTextWhereInput";
import { NewsTextOrderByInput } from "./NewsTextOrderByInput";

export type NewsTextFindManyArgs = {
  where?: NewsTextWhereInput;
  orderBy?: Array<NewsTextOrderByInput>;
  skip?: number;
  take?: number;
};
