import { NewsText } from "../newsText/NewsText";

export type News = {
  createdAt: Date | null;
  createdById: string | null;
  date: Date | null;
  fullText: string | null;
  id: string;
  imageURL: string | null;
  isDeleted: boolean;
  newsText?: Array<NewsText>;
  newsURL: string | null;
  sentiment: string | null;
  sourceName: string | null;
  text: string | null;
  thumbnailURL: string | null;
  tickers: string;
  title: string | null;
  topics: string;
  typeField: string | null;
  updatedAt: Date | null;
  updatedById: string | null;
};
