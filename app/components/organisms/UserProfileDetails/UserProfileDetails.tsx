import styles from "./UserProfileDetails.module.scss";
import { InfoSection } from "../../molecules/InfoSection/InfoSection";

type ProfileProps = {
  sections?: InfoSection[];
};

export const UserProfileDetails = ({ sections }: ProfileProps) => {
  if (!sections) return;
  return (
    <div className={styles.profileCard}>
      {sections.map((section, index) => (
        <InfoSection key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};
