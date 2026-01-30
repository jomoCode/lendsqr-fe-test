"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
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

      {/* Message */}
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Action */}
      <Link href="/" className={styles.link}>
        Back to dashboard
      </Link>
    </div>
  );
};

export { NotFound };
