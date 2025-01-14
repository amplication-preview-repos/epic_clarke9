import { User } from "../user/User";

export type TraderSuspension = {
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isDeleted: boolean;
  suspensionEndDate: Date | null;
  suspensionStartDate: Date | null;
  trader?: User;
  updatedAt: Date | null;
  updatedById: string | null;
};
