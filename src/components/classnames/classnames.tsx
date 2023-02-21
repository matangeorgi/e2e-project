import styles from './classnames.module.scss';
import cx from 'classnames';

export interface ClassnamesProps {
    className?: string;
}

export const Classnames = ({ className }: ClassnamesProps) => {
    return <div className={cx(styles.root, 'NEWcLASS', styles.nice)}>Classnames</div>;
};
