import { ReactNode } from "react";
import styles from "./LoginTemplate.module.scss";

type LoginTemplateProps = {
  left: ReactNode;
  right: ReactNode;
};

const LoginTemplate = ({ left, right }: LoginTemplateProps) => {
  return (
    <div className={styles.loginContainer}>
      {left}
      {right}
    </div>
  );
};

export { LoginTemplate };
