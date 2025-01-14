import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TraderProfileCreateInput = {
  content?: string | null;
  coverImage?: string | null;
  createdById?: string | null;
  isDeleted: boolean;
  links?: InputJsonValue;
  trader: UserWhereUniqueInput;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
