import styles from "./UserTabs.module.scss"
type TabsProps = {
  active: string;
  onChange: (tab: string) => void;
};


export const userTabs = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];


export const UserTabs = ({ active, onChange }: TabsProps) => {
  return (
    <div className={styles.tabs}>
      {userTabs.map((tab) => (
        <button
          key={tab}
          className={tab === active ? styles.active : styles.tab}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
