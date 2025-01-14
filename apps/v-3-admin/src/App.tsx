import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdList } from "./ad/AdList";
import { AdCreate } from "./ad/AdCreate";
import { AdEdit } from "./ad/AdEdit";
import { AdShow } from "./ad/AdShow";
import { AppStoreProductPriceList } from "./appStoreProductPrice/AppStoreProductPriceList";
import { AppStoreProductPriceCreate } from "./appStoreProductPrice/AppStoreProductPriceCreate";
import { AppStoreProductPriceEdit } from "./appStoreProductPrice/AppStoreProductPriceEdit";
import { AppStoreProductPriceShow } from "./appStoreProductPrice/AppStoreProductPriceShow";
import { CalendarList } from "./calendar/CalendarList";
import { CalendarCreate } from "./calendar/CalendarCreate";
import { CalendarEdit } from "./calendar/CalendarEdit";
import { CalendarShow } from "./calendar/CalendarShow";
import { CalendarTextList } from "./calendarText/CalendarTextList";
import { CalendarTextCreate } from "./calendarText/CalendarTextCreate";
import { CalendarTextEdit } from "./calendarText/CalendarTextEdit";
import { CalendarTextShow } from "./calendarText/CalendarTextShow";
import { CanUpdateList } from "./canUpdate/CanUpdateList";
import { CanUpdateCreate } from "./canUpdate/CanUpdateCreate";
import { CanUpdateEdit } from "./canUpdate/CanUpdateEdit";
import { CanUpdateShow } from "./canUpdate/CanUpdateShow";
import { ClapList } from "./clap/ClapList";
import { ClapCreate } from "./clap/ClapCreate";
import { ClapEdit } from "./clap/ClapEdit";
import { ClapShow } from "./clap/ClapShow";
import { CoinList } from "./coin/CoinList";
import { CoinCreate } from "./coin/CoinCreate";
import { CoinEdit } from "./coin/CoinEdit";
import { CoinShow } from "./coin/CoinShow";
import { CopyTradeOrderList } from "./copyTradeOrder/CopyTradeOrderList";
import { CopyTradeOrderCreate } from "./copyTradeOrder/CopyTradeOrderCreate";
import { CopyTradeOrderEdit } from "./copyTradeOrder/CopyTradeOrderEdit";
import { CopyTradeOrderShow } from "./copyTradeOrder/CopyTradeOrderShow";
import { CopyTradeList } from "./copyTrade/CopyTradeList";
import { CopyTradeCreate } from "./copyTrade/CopyTradeCreate";
import { CopyTradeEdit } from "./copyTrade/CopyTradeEdit";
import { CopyTradeShow } from "./copyTrade/CopyTradeShow";
import { FollowNotifyList } from "./followNotify/FollowNotifyList";
import { FollowNotifyCreate } from "./followNotify/FollowNotifyCreate";
import { FollowNotifyEdit } from "./followNotify/FollowNotifyEdit";
import { FollowNotifyShow } from "./followNotify/FollowNotifyShow";
import { InviteeList } from "./invitee/InviteeList";
import { InviteeCreate } from "./invitee/InviteeCreate";
import { InviteeEdit } from "./invitee/InviteeEdit";
import { InviteeShow } from "./invitee/InviteeShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { NewsTextList } from "./newsText/NewsTextList";
import { NewsTextCreate } from "./newsText/NewsTextCreate";
import { NewsTextEdit } from "./newsText/NewsTextEdit";
import { NewsTextShow } from "./newsText/NewsTextShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { ReferralCodeList } from "./referralCode/ReferralCodeList";
import { ReferralCodeCreate } from "./referralCode/ReferralCodeCreate";
import { ReferralCodeEdit } from "./referralCode/ReferralCodeEdit";
import { ReferralCodeShow } from "./referralCode/ReferralCodeShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ServerNotificationMessageList } from "./serverNotificationMessage/ServerNotificationMessageList";
import { ServerNotificationMessageCreate } from "./serverNotificationMessage/ServerNotificationMessageCreate";
import { ServerNotificationMessageEdit } from "./serverNotificationMessage/ServerNotificationMessageEdit";
import { ServerNotificationMessageShow } from "./serverNotificationMessage/ServerNotificationMessageShow";
import { SetupList } from "./setup/SetupList";
import { SetupCreate } from "./setup/SetupCreate";
import { SetupEdit } from "./setup/SetupEdit";
import { SetupShow } from "./setup/SetupShow";
import { SetupValueHistoryList } from "./setupValueHistory/SetupValueHistoryList";
import { SetupValueHistoryCreate } from "./setupValueHistory/SetupValueHistoryCreate";
import { SetupValueHistoryEdit } from "./setupValueHistory/SetupValueHistoryEdit";
import { SetupValueHistoryShow } from "./setupValueHistory/SetupValueHistoryShow";
import { SubscriptionPoolList } from "./subscriptionPool/SubscriptionPoolList";
import { SubscriptionPoolCreate } from "./subscriptionPool/SubscriptionPoolCreate";
import { SubscriptionPoolEdit } from "./subscriptionPool/SubscriptionPoolEdit";
import { SubscriptionPoolShow } from "./subscriptionPool/SubscriptionPoolShow";
import { TeamTraderList } from "./teamTrader/TeamTraderList";
import { TeamTraderCreate } from "./teamTrader/TeamTraderCreate";
import { TeamTraderEdit } from "./teamTrader/TeamTraderEdit";
import { TeamTraderShow } from "./teamTrader/TeamTraderShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { TraderProfileList } from "./traderProfile/TraderProfileList";
import { TraderProfileCreate } from "./traderProfile/TraderProfileCreate";
import { TraderProfileEdit } from "./traderProfile/TraderProfileEdit";
import { TraderProfileShow } from "./traderProfile/TraderProfileShow";
import { TraderReferralEarningList } from "./traderReferralEarning/TraderReferralEarningList";
import { TraderReferralEarningCreate } from "./traderReferralEarning/TraderReferralEarningCreate";
import { TraderReferralEarningEdit } from "./traderReferralEarning/TraderReferralEarningEdit";
import { TraderReferralEarningShow } from "./traderReferralEarning/TraderReferralEarningShow";
import { TraderSetupPnlPerformanceList } from "./traderSetupPnlPerformance/TraderSetupPnlPerformanceList";
import { TraderSetupPnlPerformanceCreate } from "./traderSetupPnlPerformance/TraderSetupPnlPerformanceCreate";
import { TraderSetupPnlPerformanceEdit } from "./traderSetupPnlPerformance/TraderSetupPnlPerformanceEdit";
import { TraderSetupPnlPerformanceShow } from "./traderSetupPnlPerformance/TraderSetupPnlPerformanceShow";
import { TraderStatList } from "./traderStat/TraderStatList";
import { TraderStatCreate } from "./traderStat/TraderStatCreate";
import { TraderStatEdit } from "./traderStat/TraderStatEdit";
import { TraderStatShow } from "./traderStat/TraderStatShow";
import { TraderSuspensionList } from "./traderSuspension/TraderSuspensionList";
import { TraderSuspensionCreate } from "./traderSuspension/TraderSuspensionCreate";
import { TraderSuspensionEdit } from "./traderSuspension/TraderSuspensionEdit";
import { TraderSuspensionShow } from "./traderSuspension/TraderSuspensionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserNotificationList } from "./userNotification/UserNotificationList";
import { UserNotificationCreate } from "./userNotification/UserNotificationCreate";
import { UserNotificationEdit } from "./userNotification/UserNotificationEdit";
import { UserNotificationShow } from "./userNotification/UserNotificationShow";
import { UserSubscriptionList } from "./userSubscription/UserSubscriptionList";
import { UserSubscriptionCreate } from "./userSubscription/UserSubscriptionCreate";
import { UserSubscriptionEdit } from "./userSubscription/UserSubscriptionEdit";
import { UserSubscriptionShow } from "./userSubscription/UserSubscriptionShow";
import { WatchListList } from "./watchList/WatchListList";
import { WatchListCreate } from "./watchList/WatchListCreate";
import { WatchListEdit } from "./watchList/WatchListEdit";
import { WatchListShow } from "./watchList/WatchListShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"v3"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ad"
          list={AdList}
          edit={AdEdit}
          create={AdCreate}
          show={AdShow}
        />
        <Resource
          name="AppStoreProductPrice"
          list={AppStoreProductPriceList}
          edit={AppStoreProductPriceEdit}
          create={AppStoreProductPriceCreate}
          show={AppStoreProductPriceShow}
        />
        <Resource
          name="Calendar"
          list={CalendarList}
          edit={CalendarEdit}
          create={CalendarCreate}
          show={CalendarShow}
        />
        <Resource
          name="CalendarText"
          list={CalendarTextList}
          edit={CalendarTextEdit}
          create={CalendarTextCreate}
          show={CalendarTextShow}
        />
        <Resource
          name="CanUpdate"
          list={CanUpdateList}
          edit={CanUpdateEdit}
          create={CanUpdateCreate}
          show={CanUpdateShow}
        />
        <Resource
          name="Clap"
          list={ClapList}
          edit={ClapEdit}
          create={ClapCreate}
          show={ClapShow}
        />
        <Resource
          name="Coin"
          list={CoinList}
          edit={CoinEdit}
          create={CoinCreate}
          show={CoinShow}
        />
        <Resource
          name="CopyTradeOrder"
          list={CopyTradeOrderList}
          edit={CopyTradeOrderEdit}
          create={CopyTradeOrderCreate}
          show={CopyTradeOrderShow}
        />
        <Resource
          name="CopyTrade"
          list={CopyTradeList}
          edit={CopyTradeEdit}
          create={CopyTradeCreate}
          show={CopyTradeShow}
        />
        <Resource
          name="FollowNotify"
          list={FollowNotifyList}
          edit={FollowNotifyEdit}
          create={FollowNotifyCreate}
          show={FollowNotifyShow}
        />
        <Resource
          name="Invitee"
          list={InviteeList}
          edit={InviteeEdit}
          create={InviteeCreate}
          show={InviteeShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="NewsText"
          list={NewsTextList}
          edit={NewsTextEdit}
          create={NewsTextCreate}
          show={NewsTextShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="ReferralCode"
          list={ReferralCodeList}
          edit={ReferralCodeEdit}
          create={ReferralCodeCreate}
          show={ReferralCodeShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="ServerNotificationMessage"
          list={ServerNotificationMessageList}
          edit={ServerNotificationMessageEdit}
          create={ServerNotificationMessageCreate}
          show={ServerNotificationMessageShow}
        />
        <Resource
          name="Setup"
          list={SetupList}
          edit={SetupEdit}
          create={SetupCreate}
          show={SetupShow}
        />
        <Resource
          name="SetupValueHistory"
          list={SetupValueHistoryList}
          edit={SetupValueHistoryEdit}
          create={SetupValueHistoryCreate}
          show={SetupValueHistoryShow}
        />
        <Resource
          name="SubscriptionPool"
          list={SubscriptionPoolList}
          edit={SubscriptionPoolEdit}
          create={SubscriptionPoolCreate}
          show={SubscriptionPoolShow}
        />
        <Resource
          name="TeamTrader"
          list={TeamTraderList}
          edit={TeamTraderEdit}
          create={TeamTraderCreate}
          show={TeamTraderShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="TraderProfile"
          list={TraderProfileList}
          edit={TraderProfileEdit}
          create={TraderProfileCreate}
          show={TraderProfileShow}
        />
        <Resource
          name="TraderReferralEarning"
          list={TraderReferralEarningList}
          edit={TraderReferralEarningEdit}
          create={TraderReferralEarningCreate}
          show={TraderReferralEarningShow}
        />
        <Resource
          name="TraderSetupPnlPerformance"
          list={TraderSetupPnlPerformanceList}
          edit={TraderSetupPnlPerformanceEdit}
          create={TraderSetupPnlPerformanceCreate}
          show={TraderSetupPnlPerformanceShow}
        />
        <Resource
          name="TraderStat"
          list={TraderStatList}
          edit={TraderStatEdit}
          create={TraderStatCreate}
          show={TraderStatShow}
        />
        <Resource
          name="TraderSuspension"
          list={TraderSuspensionList}
          edit={TraderSuspensionEdit}
          create={TraderSuspensionCreate}
          show={TraderSuspensionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserNotification"
          list={UserNotificationList}
          edit={UserNotificationEdit}
          create={UserNotificationCreate}
          show={UserNotificationShow}
        />
        <Resource
          name="UserSubscription"
          list={UserSubscriptionList}
          edit={UserSubscriptionEdit}
          create={UserSubscriptionCreate}
          show={UserSubscriptionShow}
        />
        <Resource
          name="WatchList"
          list={WatchListList}
          edit={WatchListEdit}
          create={WatchListCreate}
          show={WatchListShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
