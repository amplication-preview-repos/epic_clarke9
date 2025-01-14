import { Setup as TSetup } from "../api/setup/Setup";

export const SETUP_TITLE_FIELD = "coinName";

export const SetupTitle = (record: TSetup): string => {
  return record.coinName?.toString() || String(record.id);
};
