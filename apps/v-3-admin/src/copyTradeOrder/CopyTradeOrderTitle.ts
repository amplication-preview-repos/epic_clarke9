import { CopyTradeOrder as TCopyTradeOrder } from "../api/copyTradeOrder/CopyTradeOrder";

export const COPYTRADEORDER_TITLE_FIELD = "createdById";

export const CopyTradeOrderTitle = (record: TCopyTradeOrder): string => {
  return record.createdById?.toString() || String(record.id);
};
