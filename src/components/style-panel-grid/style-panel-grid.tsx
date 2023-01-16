import styles from './style-panel-grid.module.scss';

export interface StylePanelGridProps {
    className?: string;
    test?: number;
}

export const StylePanelGrid = ({ className ,test }: StylePanelGridProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <div className={styles.TwoXTwoGrid}>
                <span className={`${styles.red} ${styles.box}`} />
                <span className={`${styles.box} ${styles.yellow}`} />
                <span className={`${styles.box} ${styles.blue}`} />
                <span className={`${styles.red} ${styles.box}`} />
            </div>
        </div>
    );
};
