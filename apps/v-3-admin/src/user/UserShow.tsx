import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SETUP_TITLE_FIELD } from "../setup/SetupTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { COPYTRADE_TITLE_FIELD } from "../copyTrade/CopyTradeTitle";
import { TRADERSETUPPNLPERFORMANCE_TITLE_FIELD } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { USERSUBSCRIPTION_TITLE_FIELD } from "../userSubscription/UserSubscriptionTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { REFERRALCODE_TITLE_FIELD } from "../referralCode/ReferralCodeTitle";
import { TRADERPROFILE_TITLE_FIELD } from "../traderProfile/TraderProfileTitle";
import { TRADERSTAT_TITLE_FIELD } from "../traderStat/TraderStatTitle";
import { TRADERSUSPENSION_TITLE_FIELD } from "../traderSuspension/TraderSuspensionTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Approved At" source="approvedAt" />
        <BooleanField label="Can Copy Trade" source="canCopyTrade" />
        <BooleanField
          label="Copy Trade Connected"
          source="copyTradeConnected"
        />
        <TextField label="Copy Trade Market" source="copyTradeMarket" />
        <TextField label="Copy Trade Market Uid" source="copyTradeMarketUid" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By Id" source="createdById" />
        <TextField label="Device Id" source="deviceId" />
        <TextField label="Email" source="email" />
        <TextField label="Email Validation Code" source="emailValidationCode" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <TextField label="Instagram" source="instagram" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Admin" source="isAdmin" />
        <BooleanField label="Is Approved" source="isApproved" />
        <BooleanField label="Is Change Password" source="isChangePassword" />
        <BooleanField label="Is Copy Notify" source="isCopyNotify" />
        <BooleanField label="Is Customer" source="isCustomer" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Email Verified" source="isEmailVerified" />
        <BooleanField
          label="Is Membership Completed"
          source="isMembershipCompleted"
        />
        <BooleanField label="Is Notify" source="isNotify" />
        <BooleanField label="Is Trader" source="isTrader" />
        <BooleanField label="Is Trending" source="isTrending" />
        <TextField label="Language" source="language" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Monthly R" source="monthlyR" />
        <TextField label="Monthly Roi" source="monthlyRoi" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
        <TextField label="Phone" source="phone" />
        <TextField label="Rate" source="rate" />
        <ReferenceField
          label="Referral Code User Referral Code Id Toreferral Code"
          source="referralcode.id"
          reference="ReferralCode"
        >
          <TextField source={REFERRALCODE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Registration Token" source="registrationToken" />
        <TextField label="Roles" source="roles" />
        <TextField label="Suspension Start Date" source="suspensionStartDate" />
        <ReferenceField label="Teams" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Telegram" source="telegram" />
        <ReferenceField
          label="Trader Profile"
          source="traderprofile.id"
          reference="TraderProfile"
        >
          <TextField source={TRADERPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Trader Stats"
          source="traderstat.id"
          reference="TraderStat"
        >
          <TextField source={TRADERSTAT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Trader Suspension"
          source="tradersuspension.id"
          reference="TraderSuspension"
        >
          <TextField source={TRADERSUSPENSION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Twitter" source="twitter" />
        <TextField label="Uid" source="uid" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Updated By Id" source="updatedById" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Clap" target="userId" label="Claps">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CopyTradeOrder"
          target="userId"
          label="CopyTradeOrders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Act Px" source="actPx" />
            <TextField label="Act Sz" source="actSz" />
            <ReferenceField
              label="Copy Trades"
              source="copytrade.id"
              reference="CopyTrade"
            >
              <TextField source={COPYTRADE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <TextField label="Percentage" source="percentage" />
            <TextField label="Request Px" source="requestPx" />
            <TextField label="Request Sz" source="requestSz" />
            <TextField label="Requested At" source="requestedAt" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Side" source="side" />
            <TextField label="Status" source="status" />
            <TextField label="Status At" source="statusAt" />
            <TextField label="Status Message" source="statusMessage" />
            <TextField label="Stop Loss Px" source="stopLossPx" />
            <TextField label="Take Profit Px" source="takeProfitPx" />
            <TextField label="Tp Value" source="tpValue" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CopyTrade"
          target="traderId"
          label="CopyTrades"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Activated At" source="activatedAt" />
            <TextField label="Asset Size" source="assetSize" />
            <TextField label="Copied At" source="copiedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="Error No" source="errorNo" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <TextField label="Market" source="market" />
            <TextField label="Realized Pnl" source="realizedPnl" />
            <TextField label="Realized R" source="realizedR" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <TextField label="Usd Size" source="usdSize" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CopyTrade"
          target="userId"
          label="CopyTrades"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Activated At" source="activatedAt" />
            <TextField label="Asset Size" source="assetSize" />
            <TextField label="Copied At" source="copiedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="Error Message" source="errorMessage" />
            <TextField label="Error No" source="errorNo" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <TextField label="Market" source="market" />
            <TextField label="Realized Pnl" source="realizedPnl" />
            <TextField label="Realized R" source="realizedR" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="State" source="state" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <TextField label="Usd Size" source="usdSize" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FollowNotify"
          target="traderId"
          label="FollowNotifies"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Block" source="block" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <BooleanField label="Follow" source="follow" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Notify" source="notify" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FollowNotify"
          target="userId"
          label="FollowNotifies"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <BooleanField label="Block" source="block" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <BooleanField label="Follow" source="follow" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Notify" source="notify" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ReferralCode"
          target="traderId"
          label="ReferralCodes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="traderId"
          label="Reports"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="userId" label="Reports">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Hash" source="hash" />
            <TextField label="ID" source="id" />
            <TextField label="Updated At" source="updatedAt" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Setup" target="traderId" label="Setups">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Activated Stop Value"
              source="activatedStopValue"
            />
            <TextField label="Activation Date" source="activationDate" />
            <TextField label="Category" source="category" />
            <TextField label="Clap Count" source="clapCount" />
            <TextField label="Close Date" source="closeDate" />
            <TextField label="Close Price" source="closePrice" />
            <TextField label="Closed By Id" source="closedById" />
            <TextField label="Coin Name" source="coinName" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="Duration" source="duration" />
            <TextField label="Entry Value" source="entryValue" />
            <TextField label="Entry Value End" source="entryValueEnd" />
            <TextField label="ID" source="id" />
            <TextField label="Image" source="image" />
            <TextField label="Image Success" source="imageSuccess" />
            <TextField label="Initial Entry Value" source="initialEntryValue" />
            <TextField
              label="Initial Entry Value End"
              source="initialEntryValueEnd"
            />
            <TextField
              label="Initial Profit Taking1"
              source="initialProfitTaking1"
            />
            <TextField
              label="Initial Profit Taking2"
              source="initialProfitTaking2"
            />
            <TextField
              label="Initial Profit Taking3"
              source="initialProfitTaking3"
            />
            <TextField
              label="Initial Profit Taking Amount1"
              source="initialProfitTakingAmount1"
            />
            <TextField
              label="Initial Profit Taking Amount2"
              source="initialProfitTakingAmount2"
            />
            <TextField
              label="Initial Profit Taking Amount3"
              source="initialProfitTakingAmount3"
            />
            <TextField label="Initial Rr" source="initialRr" />
            <TextField label="Initial Stop Value" source="initialStopValue" />
            <BooleanField label="Is Active" source="isActive" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Hidden" source="isHidden" />
            <BooleanField label="Is Stop" source="isStop" />
            <BooleanField label="Is Targeted" source="isTargeted" />
            <BooleanField label="Is Tp1" source="isTp1" />
            <BooleanField label="Is Tp2" source="isTp2" />
            <BooleanField label="Is Tp3" source="isTp3" />
            <TextField label="Position" source="position" />
            <TextField
              label="Previous Entry Value"
              source="previousEntryValue"
            />
            <TextField
              label="Previous Entry Value End"
              source="previousEntryValueEnd"
            />
            <TextField
              label="Previous Profit Taking1"
              source="previousProfitTaking1"
            />
            <TextField
              label="Previous Profit Taking2"
              source="previousProfitTaking2"
            />
            <TextField
              label="Previous Profit Taking3"
              source="previousProfitTaking3"
            />
            <TextField
              label="Previous Profit Taking Amount1"
              source="previousProfitTakingAmount1"
            />
            <TextField
              label="Previous Profit Taking Amount2"
              source="previousProfitTakingAmount2"
            />
            <TextField
              label="Previous Profit Taking Amount3"
              source="previousProfitTakingAmount3"
            />
            <TextField label="Previous Stop Value" source="previousStopValue" />
            <TextField label="Profit Taking1" source="profitTaking1" />
            <TextField label="Profit Taking2" source="profitTaking2" />
            <TextField label="Profit Taking3" source="profitTaking3" />
            <TextField
              label="Profit Taking Amount1"
              source="profitTakingAmount1"
            />
            <TextField
              label="Profit Taking Amount2"
              source="profitTakingAmount2"
            />
            <TextField
              label="Profit Taking Amount3"
              source="profitTakingAmount3"
            />
            <TextField label="R Value" source="rValue" />
            <TextField label="Status" source="status" />
            <TextField label="Stop Date" source="stopDate" />
            <TextField label="Stop Distance" source="stopDistance" />
            <TextField label="Stop Value" source="stopValue" />
            <TextField label="Sub Status" source="subStatus" />
            <TextField label="Tags" source="tags" />
            <TextField label="Target Date" source="targetDate" />
            <TextField label="Tp1 Date" source="tp1Date" />
            <TextField label="Tp2 Date" source="tp2Date" />
            <TextField label="Tp3 Date" source="tp3Date" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Trader Setup Pnl Performance"
              source="tradersetuppnlperformance.id"
              reference="TraderSetupPnlPerformance"
            >
              <TextField source={TRADERSETUPPNLPERFORMANCE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TeamTrader"
          target="traderId"
          label="TeamTraders"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Teams" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TraderReferralEarning"
          target="traderId"
          label="TraderReferralEarnings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <TextField label="Cancellation Date" source="cancellationDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <TextField label="Installment" source="installment" />
            <TextField label="Installments" source="installments" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Paid" source="isPaid" />
            <BooleanField label="Is Withdrawal" source="isWithdrawal" />
            <TextField label="Paid Date" source="paidDate" />
            <TextField label="Trader Earn Date" source="traderEarnDate" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="User Subscription"
              source="usersubscription.id"
              reference="UserSubscription"
            >
              <TextField source={USERSUBSCRIPTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Withdrawal Date" source="withdrawalDate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TraderSetupPnlPerformance"
          target="traderId"
          label="TraderSetupPnlPerformances"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Estimated Pnl" source="estimatedPnl" />
            <TextField label="Estimated Pnl Rate" source="estimatedPnlRate" />
            <TextField label="Fee Rate" source="feeRate" />
            <TextField label="ID" source="id" />
            <TextField label="Pnl" source="pnl" />
            <TextField label="Pnl Rate" source="pnlRate" />
            <TextField label="R R" source="rR" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserNotification"
          target="traderId"
          label="UserNotifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Column Value" source="columnValue" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Message" source="message" />
            <TextField label="Message Id" source="messageId" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <TextField label="Updated Column" source="updatedColumn" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserNotification"
          target="userId"
          label="UserNotifications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Column Value" source="columnValue" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Read" source="isRead" />
            <TextField label="Message" source="message" />
            <TextField label="Message Id" source="messageId" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <TextField label="Updated Column" source="updatedColumn" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserSubscription"
          target="traderId"
          label="UserSubscriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Auto Renew Product Code"
              source="autoRenewProductCode"
            />
            <BooleanField label="Auto Renew Status" source="autoRenewStatus" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="Currency" source="currency" />
            <TextField label="Data" source="data" />
            <TextField label="Expire Date" source="expireDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Expired" source="isExpired" />
            <BooleanField
              label="Is Payment Received"
              source="isPaymentReceived"
            />
            <BooleanField label="Is Trial" source="isTrial" />
            <TextField label="Market" source="market" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Raw Data" source="rawData" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Transaction Id" source="transactionId" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserSubscription"
          target="userId"
          label="UserSubscriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Auto Renew Product Code"
              source="autoRenewProductCode"
            />
            <BooleanField label="Auto Renew Status" source="autoRenewStatus" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="Currency" source="currency" />
            <TextField label="Data" source="data" />
            <TextField label="Expire Date" source="expireDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Cancelled" source="isCancelled" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <BooleanField label="Is Expired" source="isExpired" />
            <BooleanField
              label="Is Payment Received"
              source="isPaymentReceived"
            />
            <BooleanField label="Is Trial" source="isTrial" />
            <TextField label="Market" source="market" />
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Raw Data" source="rawData" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField label="Trader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Transaction Id" source="transactionId" />
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WatchList"
          target="userId"
          label="WatchLists"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By Id" source="createdById" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Deleted" source="isDeleted" />
            <ReferenceField label="Setup" source="setup.id" reference="Setup">
              <TextField source={SETUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Updated At" source="updatedAt" />
            <TextField label="Updated By Id" source="updatedById" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
