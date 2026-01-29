"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate/DashboardTemplate";
import { Header } from "../../components/organisms/Header/Header";
import { MenuButton } from "../../components/atoms/MenuButton/MenuButton";
import { SideBar } from "../../components/organisms/SideBar/SideBar";
import { statusCards } from "../../components/organisms/StatusCard/statusCard.data";
import { StatusCard } from "../../components/organisms/StatusCard/StatusCard";
import { UserTable } from "../../components/organisms/UserTable/UserTable";
import {
  columnDefs,
} from "@/app/components/organisms/UserTable/userTable.data";
import { useClient } from "@/app/lib/hooks/useClients";
import { Loading } from "@/app/components/organisms/Loading/Loading";
import { EmptyState } from "@/app/components/organisms/Empty/Empty";
import { useUser } from "@/app/lib/hooks/useUser";
function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data } = useUser();
  const { data: clientData, isLoading } = useClient();
  const userName = data && data.fullname ? data.fullname.split(" ")[0] : "...";
  



  
  return isLoading ? (
    <Loading text="fetching client data..." />
  ) :  (
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
        userTable={<UserTable columnDefs={columnDefs} rowData={clientData} />}
        empty={!!clientData}
        emptyView={<EmptyState/>}
      />
    </div>
    )
}

export default Page;
