import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { REFERRALCODE_TITLE_FIELD } from "../referralCode/ReferralCodeTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { TRADERPROFILE_TITLE_FIELD } from "../traderProfile/TraderProfileTitle";
import { TRADERSTAT_TITLE_FIELD } from "../traderStat/TraderStatTitle";
import { TRADERSUSPENSION_TITLE_FIELD } from "../traderSuspension/TraderSuspensionTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
