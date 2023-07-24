import styles from './classes.module.scss';

export interface ClassesProps {
    className?: string;
}
export enum Seasons{asdas ='summer', a = 'autumn', b ='winter', c ='spring'};

export const Classes = ({ className }: ClassesProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            Classes<p style={{ color: 'blue', position: 'relative' }}>Inherited font</p>
        </div>
    );
};
