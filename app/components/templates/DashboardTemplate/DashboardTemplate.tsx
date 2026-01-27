"use client";

import { useState } from "react";
import { Header } from "../../organisms/Header/Header";
import { SideBar } from "../../organisms/SideBar/SideBar";
import { StatusCard } from "../../organisms/StatusCard/StatusCard";
import { statusCards } from "../../organisms/StatusCard/statusCard.data";
import { UserTable } from "../../organisms/UserTable/UserTable";
import styles from "./DashboardTemplate.module.scss";

const DashboardTemplate = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header />

      {!sidebarOpen && (
        <button
          className={styles.sidebarToggle}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          ...
        </button>
      )}

      <div className={styles.dashboardContent}>
        {/* Sidebar */}
        <div
          className={`${styles.sidebarWrapper} ${
            sidebarOpen ? styles.open : ""
          }`}
        >
          <SideBar />
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className={styles.overlay}
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className={styles.UserTableStatusContainer}>
          <div className={styles.UserTableStatusWrappper}>
            <div className={styles.dashboardStatusCard}>
              {statusCards.map(({ color, icon, mainText, title }) => (
                <StatusCard
                  key={title}
                  iconColor={color}
                  icon={icon}
                  mainText={mainText}
                  title={title}
                />
              ))}
            </div>

            <div className={styles.tableWrapper}>
              <UserTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardTemplate };
