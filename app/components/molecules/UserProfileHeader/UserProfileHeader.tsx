import { BsPerson } from "react-icons/bs";
import { UserTierStars } from "../UserTierStars/UserTierStars";
import styles from "./UserProfileHeader.module.scss"



// userHeader.types.ts
export type UserTier = 1 | 2 | 3;

export type UserHeaderData = {
  fullName: string;
  userId: string;
  tier: UserTier;
  balance: number;
  accountNumber: string;
  bankName: string;
  avatarUrl?: string;
};



type Props = {
  data: UserHeaderData;
};

export const UserProfileHeader = ({ data }: Props) => {
  const {
    fullName,
    userId,
    tier,
    balance,
    accountNumber,
    bankName,
    avatarUrl,
  } = data;

  return (
    <div className={styles.userHeader}>
      {/* Left */}
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          {avatarUrl ? (
            <img src={avatarUrl} alt={fullName} />
          ) : (
            <BsPerson size={45} />
          )}
        </div>

        <div>
          <h2>{fullName}</h2>
          <p className={styles.userId}>{userId}</p>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Tier */}
      <div className={styles.tier}>
        <span>User’s Tier</span>
        <UserTierStars tier={tier} />
      </div>

      <div className={styles.divider} />

      {/* Balance */}
      <div className={styles.balance}>
        <h3>₦{balance.toLocaleString()}.00</h3>
        <p>
          {accountNumber}/{bankName}
        </p>
      </div>
    </div>
  );
};
