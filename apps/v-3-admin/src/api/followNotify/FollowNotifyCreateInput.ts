import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowNotifyCreateInput = {
  block: boolean;
  createdById?: string | null;
  follow: boolean;
  isDeleted: boolean;
  notify: boolean;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
};
