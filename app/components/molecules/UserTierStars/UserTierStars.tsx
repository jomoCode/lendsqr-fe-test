import styles from './UserTierStars.module.scss'

type TierProps = {
  tier: number;
  max?: number;
};

export const UserTierStars = ({ tier, max = 3 }: TierProps) => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: max }).map((_, index) => (
        <span
          key={index}
          className={index < tier ? styles.filled : styles.star}
        >
          ★
        </span>
      ))}
    </div>
  );
};
