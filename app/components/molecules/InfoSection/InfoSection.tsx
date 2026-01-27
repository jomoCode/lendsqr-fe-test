import styles from "./InfoSection.module.scss";

export type InfoItem = {
  label: string;
  value: string;
};

export type InfoSection = {
  title: string;
  items: InfoItem[];
};

type SectionProps = {
  title: string;
  items: InfoItem[];
};

export const InfoSection = ({ title, items }: SectionProps) => {
  return (
    <section className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
