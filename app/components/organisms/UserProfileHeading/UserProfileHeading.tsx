'use client';

import { useState } from "react";
import {
  UserHeaderData,
  UserProfileHeader,
} from "../../molecules/UserProfileHeader/UserProfileHeader";
import { UserTabs } from "../../molecules/UserProfileHeader/UserTabs";
import styles from "./UserProfileHeading.module.scss";


const userHeaderData: UserHeaderData = {
  fullName: "Grace Effmmmm",
  userId: "LSQFf587g90",
  tier: 1,
  balance: 200000,
  accountNumber: "9912345678",
  bankName: "Providus Bank",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserProfileHeading = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState("General Details");
  const headerData = {
    fullName: data.username,
    userId: userHeaderData.userId,
    balance: userHeaderData.balance,
    accountNumber: userHeaderData.accountNumber,
    bankName: userHeaderData.bankName,
    tier: 2 as const,
  };

  return (
    <div className={styles.userProfileHeading}>
      <UserProfileHeader data={headerData} />
      <UserTabs active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export { UserProfileHeading };
