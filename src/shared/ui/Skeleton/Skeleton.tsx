import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    widht?: string | number;
    border?: string
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        widht,
        border,
    } = props;

    const styles: CSSProperties = {
        height,
        width: widht,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
};
