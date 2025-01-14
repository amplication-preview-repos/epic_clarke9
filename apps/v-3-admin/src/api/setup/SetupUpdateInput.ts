import { ClapUpdateManyWithoutSetupsInput } from "./ClapUpdateManyWithoutSetupsInput";
import { CopyTradeOrderUpdateManyWithoutSetupsInput } from "./CopyTradeOrderUpdateManyWithoutSetupsInput";
import { CopyTradeUpdateManyWithoutSetupsInput } from "./CopyTradeUpdateManyWithoutSetupsInput";
import { ReportUpdateManyWithoutSetupsInput } from "./ReportUpdateManyWithoutSetupsInput";
import { SetupValueHistoryUpdateManyWithoutSetupsInput } from "./SetupValueHistoryUpdateManyWithoutSetupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TraderSetupPnlPerformanceWhereUniqueInput } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceWhereUniqueInput";
import { UserNotificationUpdateManyWithoutSetupsInput } from "./UserNotificationUpdateManyWithoutSetupsInput";
import { WatchListUpdateManyWithoutSetupsInput } from "./WatchListUpdateManyWithoutSetupsInput";

export type SetupUpdateInput = {
  activatedStopValue?: number | null;
  activationDate?: Date | null;
  category?: "spot" | "futures";
  clap?: ClapUpdateManyWithoutSetupsInput;
  clapCount?: number | null;
  closeDate?: Date | null;
  closePrice?: number | null;
  closedById?: string | null;
  coinName?: string;
  copyTradeOrder?: CopyTradeOrderUpdateManyWithoutSetupsInput;
  copyTrades?: CopyTradeUpdateManyWithoutSetupsInput;
  createdById?: string | null;
  duration?: "shortterm" | "midterm" | "longterm" | null;
  entryValue?: number;
  entryValueEnd?: number | null;
  image?: string | null;
  imageSuccess?: string | null;
  initialEntryValue?: number | null;
  initialEntryValueEnd?: number | null;
  initialProfitTaking1?: number | null;
  initialProfitTaking2?: number | null;
  initialProfitTaking3?: number | null;
  initialProfitTakingAmount1?: number | null;
  initialProfitTakingAmount2?: number | null;
  initialProfitTakingAmount3?: number | null;
  initialRr?: string | null;
  initialStopValue?: number | null;
  isActive?: boolean;
  isDeleted?: boolean;
  isHidden?: boolean;
  isStop?: boolean | null;
  isTargeted?: boolean;
  isTp1?: boolean | null;
  isTp2?: boolean | null;
  isTp3?: boolean | null;
  position?: "long" | "short" | null;
  previousEntryValue?: number | null;
  previousEntryValueEnd?: number | null;
  previousProfitTaking1?: number | null;
  previousProfitTaking2?: number | null;
  previousProfitTaking3?: number | null;
  previousProfitTakingAmount1?: number | null;
  previousProfitTakingAmount2?: number | null;
  previousProfitTakingAmount3?: number | null;
  previousStopValue?: number | null;
  profitTaking1?: number | null;
  profitTaking2?: number | null;
  profitTaking3?: number | null;
  profitTakingAmount1?: number | null;
  profitTakingAmount2?: number | null;
  profitTakingAmount3?: number | null;
  rValue?: number | null;
  report?: ReportUpdateManyWithoutSetupsInput;
  setupValueHistory?: SetupValueHistoryUpdateManyWithoutSetupsInput;
  status?:
    | "incoming"
    | "active"
    | "cancelled"
    | "stopped"
    | "success"
    | "closed";
  stopDate?: Date | null;
  stopDistance?: number | null;
  stopValue?: number | null;
  subStatus?: string | null;
  tags?: string;
  targetDate?: Date | null;
  tp1Date?: Date | null;
  tp2Date?: Date | null;
  tp3Date?: Date | null;
  trader?: UserWhereUniqueInput | null;
  traderSetupPnlPerformance?: TraderSetupPnlPerformanceWhereUniqueInput | null;
  updatedAt?: Date | null;
  updatedById?: string | null;
  userNotification?: UserNotificationUpdateManyWithoutSetupsInput;
  watchList?: WatchListUpdateManyWithoutSetupsInput;
};
