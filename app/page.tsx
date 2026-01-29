"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/app/api/utils/cookies/cookies";
import { Loading } from "./components/organisms/Loading/Loading";


 const EntryPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("auth_token");

    if (token) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth");
    }
  }, [router]);

  return <Loading text="Checking authentication…" />;
}
export default EntryPage;