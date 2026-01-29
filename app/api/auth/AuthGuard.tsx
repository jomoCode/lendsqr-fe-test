"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/app/api/utils/cookies/cookies";
import { useUser } from "@/app/lib/hooks/useUser";
import { Loading } from "@/app/components/organisms/Loading/Loading";

type ProtectedLayoutProps = {
  children: ReactNode;
};

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const router = useRouter();
  const { data: user, isLoading } = useUser();
  const token = getCookie("auth_token");

  useEffect(() => {
    if (!token) {
      router.push("/login"); 
    }
  }, [token, router]);

  if (!token || isLoading) {
    return <Loading text="Checking authentication..." />;
  }

  return <>{children}</>;
};
