import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCodeBlock } from 'entities/Articles/model/types/Articles';
import React from 'react';
import { Code } from 'shared/ui/Code/Code';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeComponentProps {
    className?: string;
    block?: ArticleCodeBlock
}

export const ArticleBlockCodeComponent = (props: ArticleBlockCodeComponentProps) => {
    const {
        className,
        block,
    } = props;
    const copyHandleClipboard = () => {
        if (block?.code) {
            navigator.clipboard.writeText(block?.code);
        }
    };
    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>
            <Button
                className={cls.ArticleBtnCopy}
                theme={ButtonTheme.OUTLINE}
                onClick={copyHandleClipboard}
            >
                Copy
            </Button>
            <Code codeProps={block?.code} />
        </div>
    );
};
