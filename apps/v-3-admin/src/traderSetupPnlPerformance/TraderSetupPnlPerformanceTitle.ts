import { TraderSetupPnlPerformance as TTraderSetupPnlPerformance } from "../api/traderSetupPnlPerformance/TraderSetupPnlPerformance";

export const TRADERSETUPPNLPERFORMANCE_TITLE_FIELD = "id";

export const TraderSetupPnlPerformanceTitle = (
  record: TTraderSetupPnlPerformance
): string => {
  return record.id?.toString() || String(record.id);
};
