import { Setup } from "../setup/Setup";
import { User } from "../user/User";

export type WatchList = {
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  setup?: Setup | null;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User | null;
};
