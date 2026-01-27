"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import styles from "./DashboardTemplate.module.scss";

type DashboardTemplateProps = {
  header: ReactNode;
  menuButton: ReactNode;
  sidebar: ReactNode;
  statusCards: ReactNode;
  userTable: ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const DashboardTemplate = ({
  header,
  menuButton,
  sidebar,
  statusCards,
  userTable,
  sidebarOpen,
  setSidebarOpen,
}: DashboardTemplateProps) => {
  return (
    <div className={styles.container}>
      {header}

      {!sidebarOpen && menuButton}

      <div className={styles.dashboardContent}>
        {/* Sidebar */}
        <div
          className={`${styles.sidebarWrapper} ${
            sidebarOpen ? styles.open : ""
          }`}
        >
          {sidebar}
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
            <div className={styles.dashboardStatusCard}>{statusCards}</div>

            <div className={styles.tableWrapper}>{userTable}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardTemplate };
