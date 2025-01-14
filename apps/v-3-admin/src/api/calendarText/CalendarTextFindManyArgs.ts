import { CalendarTextWhereInput } from "./CalendarTextWhereInput";
import { CalendarTextOrderByInput } from "./CalendarTextOrderByInput";

export type CalendarTextFindManyArgs = {
  where?: CalendarTextWhereInput;
  orderBy?: Array<CalendarTextOrderByInput>;
  skip?: number;
  take?: number;
};
