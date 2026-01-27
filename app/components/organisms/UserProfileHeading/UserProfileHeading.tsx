import { useState } from "react";
import { UserHeaderData, UserProfileHeader } from "../../molecules/UserProfileHeader/UserProfileHeader";
import { UserTabs } from "../../molecules/UserProfileHeader/UserTabs";
import styles from "./UserProfileHeading.module.scss"
// Mock data
const userHeaderData: UserHeaderData = {
  fullName: "Grace Effmmmm",
  userId: "LSQFf587g90",
  tier: 1,
  balance: 200000,
  accountNumber: "9912345678",
  bankName: "Providus Bank",
};

const UserProfileHeading = () => {
  const [activeTab, setActiveTab] = useState("General Details");

  return (
    <div className={styles.userProfileHeading}>
      <UserProfileHeader data={userHeaderData} />
      <UserTabs active={activeTab} onChange={setActiveTab} />
    </div>
  );
};

export { UserProfileHeading };
