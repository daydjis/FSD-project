import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    width?: number;
    height?: number;
    border?: number | string;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        borderRadius: border,
    };
    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            width={width}
            height={height}
            style={styles}
        />
    );
});
