import { News } from "../news/News";

export type NewsText = {
  fullText: string | null;
  id: string;
  language: string;
  news?: News;
  text: string | null;
  title: string | null;
};
