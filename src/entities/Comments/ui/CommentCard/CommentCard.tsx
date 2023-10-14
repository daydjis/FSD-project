import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Comments } from 'entities/Comments';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comments
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
    } = props;

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <Text text={comment?.text} />
        </div>
    );
});
