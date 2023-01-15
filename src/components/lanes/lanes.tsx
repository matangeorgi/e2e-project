import styles from './lanes.module.scss';

export interface LanesProps {
    className?: string;
}

const arr = [1, 2, 3, 4, 5];

export const Lanes = ({ className }: LanesProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            {arr.map((item) => (
                <p>{item}</p>
            ))}

            {arr.map((item) => (item % 2 !== 0 ? `${item}` : <p>We dont like zugiim</p>))}
            <hr/>
            
            <>What is a fragment ?</>
        </div>
    );
};
