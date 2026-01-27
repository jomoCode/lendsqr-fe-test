import { Header } from "../../organisms/Header/Header";
import { SideBar } from "../../organisms/SideBar/SideBar";
import { StatusCard } from "../../organisms/StatusCard/StatusCard";
import { statusCards } from "../../organisms/StatusCard/statusCard.data";
import { UserTable } from "../../organisms/UserTable/UserTable";
import styles from "./DashboardTemplate.module.scss";

const DashboardTemplate = () => {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.dashboardContent}>
        <div>
          <SideBar />
        </div>

        <div className={styles.UserTableStatusContainer}>
          {/* Status cards */}
          <div className={styles.UserTableStatusWrappper}>
            <div className={styles.dashboardStatusCard}>
              {statusCards.map(({ color, icon, mainText, title }) => (
                <StatusCard
                  iconColor={color}
                  icon={icon}
                  mainText={mainText}
                  title={title}
                  key={title}
                />
              ))}
            </div>
            <div className={styles.tableWrapper}>
              <UserTable />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export { DashboardTemplate };
