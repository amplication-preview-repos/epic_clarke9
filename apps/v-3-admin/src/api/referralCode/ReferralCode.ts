import { User } from "../user/User";

export type ReferralCode = {
  code: string;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  isActive: boolean;
  isDeleted: boolean;
  referrals?: Array<User>;
  trader?: User | null;
  updatedAt: Date | null;
  updatedById: string | null;
};
