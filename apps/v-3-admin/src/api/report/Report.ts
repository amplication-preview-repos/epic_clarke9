import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type Report = {
  content: string;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  setup?: Setup | null;
  trader?: User | null;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User | null;
};
