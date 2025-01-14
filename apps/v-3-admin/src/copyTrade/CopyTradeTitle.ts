import { CopyTrade as TCopyTrade } from "../api/copyTrade/CopyTrade";

export const COPYTRADE_TITLE_FIELD = "createdById";

export const CopyTradeTitle = (record: TCopyTrade): string => {
  return record.createdById?.toString() || String(record.id);
};
