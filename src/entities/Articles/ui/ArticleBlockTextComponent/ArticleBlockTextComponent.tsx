import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from 'entities/Articles/model/types/Articles';
import { memo } from 'react';
import cls from './ArticleBlockTextComponent.module.scss';

interface ArticleBlockTextComponentProps {
    className?: string;
    block?: ArticleTextBlock
}

export const ArticleBlockTextComponent = memo((props: ArticleBlockTextComponentProps) => {
    const {
        className,
        block,
    } = props;

    return (
        <div className={classNames(cls.ArticleBlockTextComponent, {}, [className])}>
            <Text title={block?.title} />
            {block?.paragraphs.map((el) => (<Text key={el} text={el} />))}
        </div>
    );
});
