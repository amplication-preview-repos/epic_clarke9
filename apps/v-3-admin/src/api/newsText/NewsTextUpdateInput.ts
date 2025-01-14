import { NewsWhereUniqueInput } from "../news/NewsWhereUniqueInput";

export type NewsTextUpdateInput = {
  fullText?: string | null;
  language?: string;
  news?: NewsWhereUniqueInput;
  text?: string | null;
  title?: string | null;
};
