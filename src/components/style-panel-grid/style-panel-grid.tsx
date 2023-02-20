import styles from './style-panel-grid.module.scss';
import classNames from 'classnames';

export interface StylePanelGridProps {
    className?: string;
    colors?: Array<string>;
}

export const StylePanelGrid = ({ className, colors = ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'] }: StylePanelGridProps) => {
    return (
        <div className={classNames(styles.root, className)}>
                {colors.map(box => <div className={styles.box} style={{ background: box }} />)}
        </div>
    );
};
