import styles from './expression-comp.module.scss';
import { ConditionalComp } from '../conditional-comp/conditional-comp';

export interface ExpressionCompProps {
    className?: string;
}

const arr = [1, 2, 3, 4, 5];
const boolArr = [true, false, true, false, true];

export const ExpressionComp = ({ className }: ExpressionCompProps) => {
    return (
        <div className={`${styles.root} ${className}`}>
            <ConditionalComp />
            {arr.map((item,key) => (
                <p key={key}>{item}</p>
            ))}
            <hr />
            <hr />
            <hr />
            {arr.map((item, key) => (
                <div key={key}>{boolArr[arr.indexOf(item)] ? <h5>{item}</h5> : 'but it was false'}</div>
            ))}
        </div>
    );
};
