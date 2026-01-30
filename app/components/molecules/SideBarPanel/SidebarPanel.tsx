import Image from "next/image";
import clsx from "clsx";
import styles from "./SidebarPanel.module.scss";

type SidebarPanelProp = {
  icon: string;
  name: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarPanel = ({ icon, name, active, onClick }: SidebarPanelProp) => {
  return (
    <div
      className={clsx(
        styles.sideBarPanelContainer,
        active && styles.active
      )}
      onClick={onClick}
    >
      <Image
        src={`/assets/images/sidebar-icons/${icon}`}
        alt={name}
        width={16}
        height={16}
        className={styles.sideBarIcon}
      />
      <p className={styles.sideBarText}>{name}</p>
    </div>
  );
};

export { SidebarPanel };
