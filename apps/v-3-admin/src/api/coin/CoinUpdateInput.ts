export type CoinUpdateInput = {
  code?: string;
  createdById?: string | null;
  image?: string | null;
  isDeleted?: boolean;
  isFutures?: boolean;
  isSpot?: boolean;
  name?: string;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
