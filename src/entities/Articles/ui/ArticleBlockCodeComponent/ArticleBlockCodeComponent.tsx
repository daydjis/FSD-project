import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
    className?: string;
}

export const ArticleBlockCodeComponent = (props: ArticleBlockCodeComponentProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>
            ArticleBlockCodeComponent
        </div>
    );
};
