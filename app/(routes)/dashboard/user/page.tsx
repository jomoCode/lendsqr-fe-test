"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { MenuButton } from "@/app/components/atoms/MenuButton/MenuButton";
import { DashboardTemplate } from "@/app/components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "@/app/components/organisms/Header/Header";
import { SideBar } from "@/app/components/organisms/SideBar/SideBar";
import { UserProfileHeading } from "@/app/components/organisms/UserProfileHeading/UserProfileHeading";
import { UserProfileDetails } from "@/app/components/organisms/UserProfileDetails/UserProfileDetails";
import { profileSections } from "@/app/components/organisms/UserProfileDetails/userProfileDetails.data";
import { EmptyState } from "@/app/components/organisms/Empty/Empty";
import { useUser } from "@/app/lib/hooks/useUser";

function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useUser();
  const userName = data ? data.fullname.split(" ")[0] : "...";

  return (
    <div className={styles.container}>
      <DashboardTemplate
        header={<Header profileName={userName} />}
        menuButton={<MenuButton setSidebarOpen={() => setSidebarOpen(true)} />}
        setSidebarOpen={setSidebarOpen}
        sidebar={<SideBar />}
        sidebarOpen={sidebarOpen}
        statusCards={<UserProfileHeading />}
        userTable={<UserProfileDetails sections={profileSections} />}
        emptyView={
          <EmptyState
            title="Profile is empty"
            description="Profile will appear here once available"
          />
        }
        empty={false}
      />
    </div>
  );
}

export default Page;
