import Image from "next/image";
import styles from "./LoginLeft.module.scss"

const LoginLeft = () => {
  return (
    <div className={styles.loginLeftContainer}>
      <div className={styles.loginLeftInner}>
        <Image
          src="/assets/images/logo.png"
          alt="Company logo"
          width={178}
          height={38}
          priority
        />

        <Image
          src="/assets/images/auth-page-image.png"
          alt="Auth illustration"
          className={styles.mainImage}
          width={550}
          height={168}
          priority
        />
      </div>
    </div>
  );
}

export {LoginLeft};
