import styles from './microsoft.module.scss';
import classNames from 'classnames';
import { StylePanelGrid } from '../style-panel-grid/style-panel-grid';

export interface MicrosoftProps {
    className?: string;
}

export const Microsoft = ({ className }: MicrosoftProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <StylePanelGrid />
            Microsoft
        </div>
    );
};
