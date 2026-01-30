"use client";

import { useState } from "react";
import styles from "./UsersProfile.module.scss";
import { MenuButton } from "@/app/components/atoms/MenuButton/MenuButton";
import { DashboardTemplate } from "@/app/components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "@/app/components/organisms/MainHeader/MainHeader";
import { SideBar } from "@/app/components/organisms/SideBar/SideBar";
import { UserProfileHeading } from "@/app/components/organisms/UserProfileHeading/UserProfileHeading";
import { UserProfileDetails } from "@/app/components/organisms/UserProfileDetails/UserProfileDetails";
import { EmptyState } from "@/app/components/organisms/Empty/Empty";
import { useUser } from "@/app/lib/hooks/useUser";
import {
  getProfileDetailsFromStorage,
  StoredUser,
} from "@/app/lib/localStorage";
import { UserDetailActions } from "@/app/components/organisms/UserDetailActions/UserDetailActions";
import { InfoSection } from "@/app/components/molecules/InfoSection/InfoSection";

const UsersProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useUser();
  const userName = data ? data.fullname.split(" ")[0] : "...";
  const profileSections = getProfileDetailsFromStorage();
  const user: StoredUser = JSON.parse(
    sessionStorage.getItem("selectedUser") ?? "null",
  );
  const mutateProfileSection = (profileSections: InfoSection[] | undefined) => {
    if (profileSections) {
      const personalInformation = profileSections[0].items.map((item, index) =>
        index === 0
          ? { ...item, label: "Full Name", value: user.username }
          : item,
      );

      const modifiedSection = [
        { ...profileSections[0], items: personalInformation },
        profileSections[1],
        profileSections[2],
        profileSections[3],
      ];

      return modifiedSection;
    }
  };

  return (
    <div className={styles.container}>
      <DashboardTemplate
        header={<Header profileName={userName} />}
        menuButton={<MenuButton setSidebarOpen={() => setSidebarOpen(true)} />}
        setSidebarOpen={setSidebarOpen}
        sidebar={<SideBar />}
        sidebarOpen={sidebarOpen}
        userActions={<UserDetailActions />}
        statusCards={<UserProfileHeading data={user} />}
        userTable={
          <UserProfileDetails
            sections={
              profileSections
                ? mutateProfileSection(profileSections)
                : profileSections
            }
          />
        }
        emptyView={
          <EmptyState
            title="Profile is empty"
            description="Profile will appear here once available"
          />
        }
        empty={!!profileSections}
      />
    </div>
  );
};

export { UsersProfile };
