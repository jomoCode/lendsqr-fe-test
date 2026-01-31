"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { columnDefs } from "@/app/components/organisms/UserTable/userTable.data";
import { useClient } from "@/app/lib/hooks/useClients";
import { Loading } from "@/app/components/organisms/Loading/Loading";
import { EmptyState } from "@/app/components/organisms/Empty/Empty";
import { useUser } from "@/app/lib/hooks/useUser";
import { useRouter } from "next/navigation";
import { saveProfileDetailsToStorage } from "@/app/lib/localStorage";
import { profileSections } from "@/app/components/organisms/UserProfileDetails/userProfileDetails.data";
import { DashboardTemplate } from "@/app/components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "@/app/components/organisms/MainHeader/MainHeader";
import { MenuButton } from "@/app/components/atoms/MenuButton/MenuButton";
import { SideBar } from "@/app/components/organisms/SideBar/SideBar";
import { StatusCard } from "@/app/components/organisms/StatusCard/StatusCard";
import { statusCards } from "@/app/components/organisms/StatusCard/statusCard.data";
import { UserTable } from "@/app/components/organisms/UserTable/UserTable";

function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useUser();
  const { data: clientData, isLoading } = useClient();
  const userName = data && data.fullname ? data.fullname.split(" ")[0] : "...";
  const router = useRouter();

  return isLoading ? (
    <Loading text="fetching client data..." />
  ) : (
    <div className={styles.container}>
      <DashboardTemplate
        header={<Header profileName={userName} />}
        menuButton={
          <MenuButton
            setSidebarOpen={() => {
              setSidebarOpen(true);
            }}
          />
        }
        setSidebarOpen={setSidebarOpen}
        userActions={  <h1 className={styles.title}>Users</h1>}
        sidebar={<SideBar />}
        sidebarOpen={sidebarOpen}
        statusCards={statusCards.map(({ color, icon, mainText, title }) => (
          <StatusCard
            key={title}
            iconColor={color}
            icon={icon}
            mainText={mainText}
            title={title}
          />
        ))}
        userTable={
          <UserTable
            columnDefs={columnDefs}
            rowData={clientData}
            onCellClick={(user) => {
              console.log("Clicked row:", user);
              sessionStorage.setItem("selectedUser", JSON.stringify(user));
              saveProfileDetailsToStorage(profileSections);
            }}
          />
        }
        empty={!!clientData}
        emptyView={<EmptyState />}
      />
    </div>
  );
}

export default Page;
