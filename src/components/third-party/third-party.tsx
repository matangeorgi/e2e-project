import styles from './third-party.module.scss';
import classNames from 'classnames';
import { ProgressBar, Button } from '@blueprintjs/core';

export interface ThirdPartyProps {
    className?: string;
}

export const ThirdParty = ({ className }: ThirdPartyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <ProgressBar />
            <Button>Buttotnototnotntont</Button>
            ThirdParty
            <ProgressBar />
        </div>
    );
};
