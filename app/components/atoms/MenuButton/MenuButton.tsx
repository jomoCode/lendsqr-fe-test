import styles from "./MenuButton.module.scss";

type MenuButtonProps = {
  setSidebarOpen: () => void;
};

export const MenuButton = ({ setSidebarOpen }: MenuButtonProps) => (
  <button
    className={styles.sidebarToggle}
    onClick={() => {
      setSidebarOpen();
    }}
    aria-label="Open sidebar"
  >
    ...
  </button>
);
