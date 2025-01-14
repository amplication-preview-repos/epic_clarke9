import { ServerNotificationMessageWhereInput } from "./ServerNotificationMessageWhereInput";
import { ServerNotificationMessageOrderByInput } from "./ServerNotificationMessageOrderByInput";

export type ServerNotificationMessageFindManyArgs = {
  where?: ServerNotificationMessageWhereInput;
  orderBy?: Array<ServerNotificationMessageOrderByInput>;
  skip?: number;
  take?: number;
};
