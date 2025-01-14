import { Setup } from "../setup/Setup";

export type SetupValueHistory = {
  createdAt: Date | null;
  fieldField: string;
  id: string;
  setup?: Setup | null;
  value: number | null;
};
