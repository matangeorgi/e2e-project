import styles from './all-styles.module.scss';

export interface AllStylesProps {
    className?: string;
}

export const AllStyles = ({ className }: AllStylesProps) => {
    return (
        <div className={`${styles.root} ${styles.inCodeClass} ${className}`}>
            <h1 className={styles.header}>Heading</h1>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.image}
            />
            <video
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4"
            />
            AllStyles
        </div>
    );
};
