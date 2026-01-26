import styles from "./SidebarPanel.module.scss";
import * as MyIcons from "react-icons/bs";
import clsx from "clsx";

type SidebarPanelProp = {
  icon: keyof typeof MyIcons;
  name: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarPanel = ({ icon, name, active, onClick }: SidebarPanelProp) => {
  const Icon = MyIcons[icon];

  return (
    <div
      className={clsx(
        styles.sideBarPanelContainer,
        active && styles.active
      )}
      onClick={onClick}
    >
      <Icon className={styles.sideBarIcon} size={20} />
      <p className={styles.sideBarText}>{name}</p>
    </div>
  );
};

export { SidebarPanel };
