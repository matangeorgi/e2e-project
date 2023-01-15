import styles from './conditional-comp.module.scss';

export interface ConditionalCompProps {
    className?: string;
}

const condition = true;

export const ConditionalComp = ({ className }: ConditionalCompProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            {condition ? <p>Damnnnn</p> : 'it was false'}
        </div>
    );
};
