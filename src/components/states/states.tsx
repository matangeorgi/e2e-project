import styles from './states.module.scss';

export interface StatesProps {
    className?: string;
}

export const States = ({ className }: StatesProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <button className={styles.buttonClass}>Button</button>
        </div>
    );
};
