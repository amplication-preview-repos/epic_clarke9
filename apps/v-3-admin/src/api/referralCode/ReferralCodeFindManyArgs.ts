import { ReferralCodeWhereInput } from "./ReferralCodeWhereInput";
import { ReferralCodeOrderByInput } from "./ReferralCodeOrderByInput";

export type ReferralCodeFindManyArgs = {
  where?: ReferralCodeWhereInput;
  orderBy?: Array<ReferralCodeOrderByInput>;
  skip?: number;
  take?: number;
};
