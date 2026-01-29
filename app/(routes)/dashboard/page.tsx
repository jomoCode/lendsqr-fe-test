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
import { columnDefs, rowData } from "@/app/components/organisms/UserTable/userTable.data";
;

function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  return (
    <div className={styles.container}>
      <DashboardTemplate
        header={<Header />}
        menuButton={<MenuButton setSidebarOpen={()=> {setSidebarOpen(true)}}/>}
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
        userTable={<UserTable columnDefs={columnDefs} rowData={rowData} />}
      />
    </div>
  );
}

export default Page;
