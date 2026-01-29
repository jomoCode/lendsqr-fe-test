"use client";

import { useState } from "react";
import { loginAsync } from "@/app/api/auth/auth-api";
import { LoginForm } from "../../molecules/LoginForm/LoginForm";
import styles from "./LoginRight.module.scss";
import { useRouter } from "next/navigation";

const LoginRight = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    setError(null);
    setLoading(true);

    try {
      const user = await loginAsync(data.email, data.password);

      if (!user) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      console.log("Logged in user:", user);
      router.push("/dashboard");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginRightContainer}>
      <div className={styles.loginRight}>
        <p className={styles.welcomeText}>WELCOME.</p>
        <h1 className={styles.heading}>Enter details to login</h1>

        <LoginForm handleLogin={handleLogin} loading={loading} />

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export { LoginRight };
