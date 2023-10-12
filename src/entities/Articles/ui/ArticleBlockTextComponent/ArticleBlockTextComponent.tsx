import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
    className?: string;
}

export const ArticleBlockTextComponent = (props: ArticleBlockTextComponentProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockTextComponent, {}, [className])}>
            ArticleBlockTextComponentProps
        </div>
    );
};
