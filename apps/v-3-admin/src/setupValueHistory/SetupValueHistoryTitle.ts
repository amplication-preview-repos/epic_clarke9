import { SetupValueHistory as TSetupValueHistory } from "../api/setupValueHistory/SetupValueHistory";

export const SETUPVALUEHISTORY_TITLE_FIELD = "fieldField";

export const SetupValueHistoryTitle = (record: TSetupValueHistory): string => {
  return record.fieldField?.toString() || String(record.id);
};
