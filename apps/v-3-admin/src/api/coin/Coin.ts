export type Coin = {
  code: string;
  createdAt: Date | null;
  createdById: string | null;
  id: string;
  image: string | null;
  isDeleted: boolean;
  isFutures: boolean;
  isSpot: boolean;
  name: string;
  updatedAt: Date | null;
  updatedById: string | null;
};
