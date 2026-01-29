'use client'

import { ProtectedLayout } from "@/app/api/auth/AuthGuard";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <ProtectedLayout>{children}</ProtectedLayout>;
};
export default DashboardLayout;
