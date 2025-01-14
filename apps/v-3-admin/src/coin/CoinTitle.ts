import { Coin as TCoin } from "../api/coin/Coin";

export const COIN_TITLE_FIELD = "name";

export const CoinTitle = (record: TCoin): string => {
  return record.name?.toString() || String(record.id);
};
