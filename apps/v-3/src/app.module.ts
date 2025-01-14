import { Module } from "@nestjs/common";
import { AdModule } from "./ad/ad.module";
import { AppStoreProductPriceModule } from "./appStoreProductPrice/appStoreProductPrice.module";
import { CalendarModule } from "./calendar/calendar.module";
import { CalendarTextModule } from "./calendarText/calendarText.module";
import { CanUpdateModule } from "./canUpdate/canUpdate.module";
import { ClapModule } from "./clap/clap.module";
import { CoinModule } from "./coin/coin.module";
import { CopyTradeOrderModule } from "./copyTradeOrder/copyTradeOrder.module";
import { CopyTradeModule } from "./copyTrade/copyTrade.module";
import { FollowNotifyModule } from "./followNotify/followNotify.module";
import { InviteeModule } from "./invitee/invitee.module";
import { NewsModule } from "./news/news.module";
import { NewsTextModule } from "./newsText/newsText.module";
import { ProductModule } from "./product/product.module";
import { ReferralCodeModule } from "./referralCode/referralCode.module";
import { ReportModule } from "./report/report.module";
import { ServerNotificationMessageModule } from "./serverNotificationMessage/serverNotificationMessage.module";
import { SetupModule } from "./setup/setup.module";
import { SetupValueHistoryModule } from "./setupValueHistory/setupValueHistory.module";
import { SubscriptionPoolModule } from "./subscriptionPool/subscriptionPool.module";
import { TeamTraderModule } from "./teamTrader/teamTrader.module";
import { TeamModule } from "./team/team.module";
import { TraderProfileModule } from "./traderProfile/traderProfile.module";
import { TraderReferralEarningModule } from "./traderReferralEarning/traderReferralEarning.module";
import { TraderSetupPnlPerformanceModule } from "./traderSetupPnlPerformance/traderSetupPnlPerformance.module";
import { TraderStatModule } from "./traderStat/traderStat.module";
import { TraderSuspensionModule } from "./traderSuspension/traderSuspension.module";
import { UserModule } from "./user/user.module";
import { UserNotificationModule } from "./userNotification/userNotification.module";
import { UserSubscriptionModule } from "./userSubscription/userSubscription.module";
import { WatchListModule } from "./watchList/watchList.module";
import { SessionModule } from "./session/session.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AdModule,
    AppStoreProductPriceModule,
    CalendarModule,
    CalendarTextModule,
    CanUpdateModule,
    ClapModule,
    CoinModule,
    CopyTradeOrderModule,
    CopyTradeModule,
    FollowNotifyModule,
    InviteeModule,
    NewsModule,
    NewsTextModule,
    ProductModule,
    ReferralCodeModule,
    ReportModule,
    ServerNotificationMessageModule,
    SetupModule,
    SetupValueHistoryModule,
    SubscriptionPoolModule,
    TeamTraderModule,
    TeamModule,
    TraderProfileModule,
    TraderReferralEarningModule,
    TraderSetupPnlPerformanceModule,
    TraderStatModule,
    TraderSuspensionModule,
    UserModule,
    UserNotificationModule,
    UserSubscriptionModule,
    WatchListModule,
    SessionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
