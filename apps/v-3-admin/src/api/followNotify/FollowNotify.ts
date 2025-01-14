import { User } from "../user/User";

export type FollowNotify = {
  block: boolean;
  createdAt: Date | null;
  createdById: string | null;
  follow: boolean;
  id: string;
  isDeleted: boolean;
  notify: boolean;
  trader?: User | null;
  updatedAt: Date | null;
  updatedById: string | null;
  user?: User | null;
};
