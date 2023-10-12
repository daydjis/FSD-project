import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
    className?: string;
}

export const ArticleBlockImageComponent = (props: ArticleBlockImageComponentProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>
            ArticleBlockImgComponentProps
        </div>
    );
};
