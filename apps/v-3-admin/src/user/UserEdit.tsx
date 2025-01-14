import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClapTitle } from "../clap/ClapTitle";
import { CopyTradeOrderTitle } from "../copyTradeOrder/CopyTradeOrderTitle";
import { CopyTradeTitle } from "../copyTrade/CopyTradeTitle";
import { FollowNotifyTitle } from "../followNotify/FollowNotifyTitle";
import { ReferralCodeTitle } from "../referralCode/ReferralCodeTitle";
import { ReportTitle } from "../report/ReportTitle";
import { SessionTitle } from "../session/SessionTitle";
import { SetupTitle } from "../setup/SetupTitle";
import { TeamTraderTitle } from "../teamTrader/TeamTraderTitle";
import { TeamTitle } from "../team/TeamTitle";
import { TraderProfileTitle } from "../traderProfile/TraderProfileTitle";
import { TraderReferralEarningTitle } from "../traderReferralEarning/TraderReferralEarningTitle";
import { TraderSetupPnlPerformanceTitle } from "../traderSetupPnlPerformance/TraderSetupPnlPerformanceTitle";
import { TraderStatTitle } from "../traderStat/TraderStatTitle";
import { TraderSuspensionTitle } from "../traderSuspension/TraderSuspensionTitle";
import { UserNotificationTitle } from "../userNotification/UserNotificationTitle";
import { UserSubscriptionTitle } from "../userSubscription/UserSubscriptionTitle";
import { WatchListTitle } from "../watchList/WatchListTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Approved At" source="approvedAt" />
        <BooleanInput label="Can Copy Trade" source="canCopyTrade" />
        <ReferenceArrayInput source="clap" reference="Clap">
          <SelectArrayInput
            optionText={ClapTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput
          label="Copy Trade Connected"
          source="copyTradeConnected"
        />
        <TextInput label="Copy Trade Market" source="copyTradeMarket" />
        <TextInput label="Copy Trade Market Uid" source="copyTradeMarketUid" />
        <ReferenceArrayInput source="copyTradeOrder" reference="CopyTradeOrder">
          <SelectArrayInput
            optionText={CopyTradeOrderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="copyTradesCopyTradesTraderIdTouser"
          reference="CopyTrade"
        >
          <SelectArrayInput
            optionText={CopyTradeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="copyTradesCopyTradesUserIdTouser"
          reference="CopyTrade"
        >
          <SelectArrayInput
            optionText={CopyTradeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Created By Id" source="createdById" />
        <TextInput label="Device Id" source="deviceId" />
        <TextInput label="Email" source="email" />
        <TextInput label="Email Validation Code" source="emailValidationCode" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="followNotifyFollowNotifyTraderIdTouser"
          reference="FollowNotify"
        >
          <SelectArrayInput
            optionText={FollowNotifyTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="followNotifyFollowNotifyUserIdTouser"
          reference="FollowNotify"
        >
          <SelectArrayInput
            optionText={FollowNotifyTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Image" source="image" />
        <TextInput label="Instagram" source="instagram" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Admin" source="isAdmin" />
        <BooleanInput label="Is Approved" source="isApproved" />
        <BooleanInput label="Is Change Password" source="isChangePassword" />
        <BooleanInput label="Is Copy Notify" source="isCopyNotify" />
        <BooleanInput label="Is Customer" source="isCustomer" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Email Verified" source="isEmailVerified" />
        <BooleanInput
          label="Is Membership Completed"
          source="isMembershipCompleted"
        />
        <BooleanInput label="Is Notify" source="isNotify" />
        <BooleanInput label="Is Trader" source="isTrader" />
        <BooleanInput label="Is Trending" source="isTrending" />
        <TextInput label="Language" source="language" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="Monthly R" source="monthlyR" />
        <TextInput label="Monthly Roi" source="monthlyRoi" />
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <TextInput label="Phone" source="phone" />
        <NumberInput step={1} label="Rate" source="rate" />
        <ReferenceArrayInput
          source="referralCodeReferralCodeTraderIdTouser"
          reference="ReferralCode"
        >
          <SelectArrayInput
            optionText={ReferralCodeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="referralCodeUserReferralCodeIdToreferralCode.id"
          reference="ReferralCode"
          label="Referral Code User Referral Code Id Toreferral Code"
        >
          <SelectInput optionText={ReferralCodeTitle} />
        </ReferenceInput>
        <TextInput label="Registration Token" source="registrationToken" />
        <ReferenceArrayInput
          source="reportReportTraderIdTouser"
          reference="Report"
        >
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reportReportUserIdTouser"
          reference="Report"
        >
          <SelectArrayInput
            optionText={ReportTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="sessions" reference="Session">
          <SelectArrayInput
            optionText={SessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="setup" reference="Setup">
          <SelectArrayInput
            optionText={SetupTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput
          label="Suspension Start Date"
          source="suspensionStartDate"
        />
        <ReferenceArrayInput source="teamTraders" reference="TeamTrader">
          <SelectArrayInput
            optionText={TeamTraderTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="teams.id" reference="Team" label="Teams">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Telegram" source="telegram" />
        <ReferenceInput
          source="traderProfile.id"
          reference="TraderProfile"
          label="Trader Profile"
        >
          <SelectInput optionText={TraderProfileTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="traderReferralEarning"
          reference="TraderReferralEarning"
        >
          <SelectArrayInput
            optionText={TraderReferralEarningTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="traderSetupPnlPerformance"
          reference="TraderSetupPnlPerformance"
        >
          <SelectArrayInput
            optionText={TraderSetupPnlPerformanceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="traderStats.id"
          reference="TraderStat"
          label="Trader Stats"
        >
          <SelectInput optionText={TraderStatTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="traderSuspension.id"
          reference="TraderSuspension"
          label="Trader Suspension"
        >
          <SelectInput optionText={TraderSuspensionTitle} />
        </ReferenceInput>
        <TextInput label="Twitter" source="twitter" />
        <TextInput label="Uid" source="uid" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <TextInput label="Updated By Id" source="updatedById" />
        <ReferenceArrayInput
          source="userNotificationUserNotificationTraderIdTouser"
          reference="UserNotification"
        >
          <SelectArrayInput
            optionText={UserNotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userNotifications"
          reference="UserNotification"
        >
          <SelectArrayInput
            optionText={UserNotificationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userSubscriptionUserSubscriptionTraderIdTouser"
          reference="UserSubscription"
        >
          <SelectArrayInput
            optionText={UserSubscriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userSubscriptions"
          reference="UserSubscription"
        >
          <SelectArrayInput
            optionText={UserSubscriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput source="watchList" reference="WatchList">
          <SelectArrayInput
            optionText={WatchListTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
