import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleImageBlock } from 'entities/Articles/model/types/Articles';
import { memo } from 'react';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageComponentProps {
    className?: string;
    block?: ArticleImageBlock
}

export const ArticleBlockImageComponent = memo((props: ArticleBlockImageComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>
            <Avatar src={block?.src} width={600} />
        </div>
    );
});
