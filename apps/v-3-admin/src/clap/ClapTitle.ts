import { Clap as TClap } from "../api/clap/Clap";

export const CLAP_TITLE_FIELD = "createdById";

export const ClapTitle = (record: TClap): string => {
  return record.createdById?.toString() || String(record.id);
};
