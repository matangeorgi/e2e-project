import styles from './new-component-2.module.scss';

export interface NewComponent2Props {
    className?: string;
    bool?: boolean;
    arr?: number[];
    obj?: object;
    color?: string;
    func?: Function;
    enum?: object;
}

export const NewComponent2 = ({ className }: NewComponent2Props) => {
    return <div onClick={() => console.log('')} className={`${styles.root} ${className}`}>NewComponent2</div>;
};
