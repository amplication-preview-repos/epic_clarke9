import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type TraderProfile = {
  content: string | null;
  coverImage: string | null;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  links: JsonValue;
  trader?: User;
  updatedAt: Date | null;
  updatedById: string | null;
};
