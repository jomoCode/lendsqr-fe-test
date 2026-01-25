import { LoginForm } from "../../molecules/LoginForm/LoginForm";
import styles from "./LoginRight.module.scss";

const LoginRight = () => {
  return (
    <div className={styles.loginRightContainer}>
      <div className={styles.loginRight}>
     
        <p className={styles.welcomeText}>WELCOME.</p>
        <h1 className={styles.heading}>Enter details to login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export { LoginRight };
