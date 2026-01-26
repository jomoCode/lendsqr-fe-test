import { ReactNode } from 'react';
import styles from './StatusCard.module.scss'

type StatusCardProps = {icon:ReactNode; title:string; mainText:string; iconColor:string;};

const StatusCard = ({icon, title,mainText, iconColor}:StatusCardProps) => {
    return (
    <div className={styles.statCardContainer}>
        <div className={styles.iconWrapper} style={{backgroundColor:`${iconColor}33`}}>{icon}</div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardMainText}>{mainText}</div>
    </div>
    );
}

export {StatusCard};