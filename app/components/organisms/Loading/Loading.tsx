"use client";
import styles from "./Loading.module.scss";
import Image from "next/image";

type LoadingProps = {
  text?: string; 
};

export const Loading = ({ text = "Loading..." }: LoadingProps) => {
  return (
    <div className={styles.authGate}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/assets/images/logo.png"
          alt="Company logo"
          width={178}
          height={38}
          priority
        />
      </div>

      {/* Loading text with animated dots */}
      <div className={styles.loadingText}>
        {text}
        <span className={styles.dots}></span>
      </div>
    </div>
  );
};
