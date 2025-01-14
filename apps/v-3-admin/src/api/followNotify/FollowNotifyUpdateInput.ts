import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowNotifyUpdateInput = {
  block?: boolean;
  createdById?: string | null;
  follow?: boolean;
  isDeleted?: boolean;
  notify?: boolean;
  trader?: UserWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  user?: UserWhereUniqueInput | null;
};
