import { TeamTrader as TTeamTrader } from "../api/teamTrader/TeamTrader";

export const TEAMTRADER_TITLE_FIELD = "createdById";

export const TeamTraderTitle = (record: TTeamTrader): string => {
  return record.createdById?.toString() || String(record.id);
};
