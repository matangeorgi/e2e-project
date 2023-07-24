import styles from './new-component-2.module.scss';
import {Seasons} from '../../components/classes/classes';

export interface NewComponent2Props {
    className?: string;
    bool?: boolean;
    arr?: number[];
    obj?: object;
    color?: string;
    func?: Function;
    enum?: Seasons;
}

export const NewComponent2 = ({ className }: NewComponent2Props) => {
    return <div onClick={() => console.log('')} className={`${styles.root} ${className}`}>NewComponent2</div>;
};
