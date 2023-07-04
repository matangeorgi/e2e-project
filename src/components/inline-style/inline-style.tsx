import styles from './inline-style.module.scss';

export interface InlineStyleProps {
    className?: string;
}

export const InlineStyle = ({ className }: InlineStyleProps) => {
    return (
        <div
            className={`${styles.root} ${className}`}
            style={{
                background: 'red',
                fontStyle: 'italic',
                position: 'relative',
                boxShadow: '2.83px 2.83px 2px 51px black',
            }}
        >
            InlineStyleasdasd
        </div>
    );
};
