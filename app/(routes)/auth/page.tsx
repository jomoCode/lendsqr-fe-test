"use client";
import { getCookie } from "@/app/api/utils/cookies/cookies";
import { LoginLeft } from "../../components/organisms/LoginLeft/LoginLeft";
import { LoginRight } from "../../components/organisms/LoginRight/LoginRight";
import { LoginTemplate } from "../../components/templates/LoginTemplate/LoginTemplate";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Page() {
  const router = useRouter();
  
  useEffect(() => {
    const signedIn = getCookie("auth_token");
    if (signedIn) router.push("/dashboard");
  }, []);

  return (
    <div className={styles.container}>
      <LoginTemplate left={<LoginLeft />} right={<LoginRight />} />
    </div>
  );
}

export default Page;
