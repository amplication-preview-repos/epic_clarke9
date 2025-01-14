import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  deletedAt?: Date | null;
  hash?: string;
  updatedAt?: Date | null;
  user?: UserWhereUniqueInput;
};
