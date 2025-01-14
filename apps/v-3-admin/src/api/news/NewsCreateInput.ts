import { NewsTextCreateNestedManyWithoutNewsItemsInput } from "./NewsTextCreateNestedManyWithoutNewsItemsInput";

export type NewsCreateInput = {
  createdById?: string | null;
  date?: Date | null;
  fullText?: string | null;
  imageURL?: string | null;
  isDeleted: boolean;
  newsText?: NewsTextCreateNestedManyWithoutNewsItemsInput;
  newsURL?: string | null;
  sentiment?: string | null;
  sourceName?: string | null;
  text?: string | null;
  thumbnailURL?: string | null;
  tickers: string;
  title?: string | null;
  topics: string;
  typeField?: string | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
};
