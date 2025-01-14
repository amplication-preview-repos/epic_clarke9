import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  deletedAt: Date | null;
  hash: string;
  id: string;
  updatedAt: Date | null;
  user?: User;
};
