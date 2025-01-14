import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  deletedAt?: Date | null;
  hash: string;
  updatedAt?: Date | null;
  user: UserWhereUniqueInput;
};
