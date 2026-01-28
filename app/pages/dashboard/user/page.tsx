import { useState } from "react";
import styles from "./page.module.scss";
import { MenuButton } from "@/app/components/atoms/MenuButton/MenuButton";
import { DashboardTemplate } from "@/app/components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "@/app/components/organisms/Header/Header";
import { SideBar } from "@/app/components/organisms/SideBar/SideBar";
import { UserProfileHeading } from "@/app/components/organisms/UserProfileHeading/UserProfileHeading";
import { UserProfileDetails } from "@/app/components/organisms/UserProfileDetails/UserProfileDetails";
import { profileSections } from "@/app/components/organisms/UserProfileDetails/userProfileDetails.data";

function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className={styles.container}>
      <DashboardTemplate
        header={<Header />}
        menuButton={<MenuButton setSidebarOpen={() => setSidebarOpen(true)} />}
        setSidebarOpen={setSidebarOpen}
        sidebar={<SideBar />}
        sidebarOpen={sidebarOpen}
        statusCards={<UserProfileHeading />}
        userTable={<UserProfileDetails sections={profileSections} />}
      />
    </div>
  );
}

export default Page;
