"use client";
import styles from "./Empty.module.scss";
import Image from "next/image";

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export const EmptyState = ({
  title = "No clients yet",
  description = "Clients will appear here once they are added.",
}: EmptyStateProps) => {
  return (
    <div className={styles.emptyState}>
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.png"
          alt="Company logo"
          width={120}
          height={26}
          priority
        />
      </div>

      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
