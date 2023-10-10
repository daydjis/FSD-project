import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    width?: number;
    height?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        className,
        src,
        height,
        width,
    } = props;

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            width={width}
            height={height}
        />
    );
});
