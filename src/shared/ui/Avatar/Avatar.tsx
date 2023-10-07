import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    width?: number;
    height?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        height,
        width,
    } = props;

    return (
        <div className={classNames(cls.Avatar, {}, [className])}>
            <img
                src={src}
                width={width}
                height={height}
            />
        </div>
    );
};
