"use client";

import Link from "next/link";
import styles from "./UserDetailActions.module.scss";
import { FiArrowLeft } from "react-icons/fi";

const UserDetailActions = () => {
  return (
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <Link href="/dashboard" className={styles.backLink}>
          <FiArrowLeft size={20} />
          <span>Back to Users</span>
        </Link>

        <h1 className={styles.title}>User Details</h1>
      </div>

      {/* Right */}
      <div className={styles.actions}>
        <button className={styles.blacklist} id="blacklist">Blacklist User</button>
        <button className={styles.activate} id="a ctivate">Activate User</button>
      </div>
    </div>
  );
};

export { UserDetailActions };
