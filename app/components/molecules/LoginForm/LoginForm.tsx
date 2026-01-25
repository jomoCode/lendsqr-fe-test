"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  handleLogin: (data: FormData) => Promise<void>;
  loading: boolean;
};

const LoginForm = ({ handleLogin, loading }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: FormData) => {
    handleLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      {/* Email */}
      <input
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
        className={styles.loginInputs}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      {/* Password with toggle */}
      <div className={styles.passwordWrapper}>
        <input
          {...register("password", { required: "Password is required" })}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={styles.loginInputs}
        />
        <button
          type="button"
          className={styles.toggleButton}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <Link href={"/"}>
        {" "}
        <p className={styles.forgotPassword}>FORGOT PASSWORD?</p>{" "}
      </Link>
      <button disabled={loading} type="submit" className={styles.submitButton}>
        {loading ? 'loading...' : "Login"}
      </button>
    </form>
  );
};

export { LoginForm };
