import styles from './states.module.scss';
import classNames from 'classnames';

export const States = ({ className }: React.HTMLProps<HTMLButtonElement>) => {
    return <button className={classNames(styles.root, className)}>Button</button>;
};
