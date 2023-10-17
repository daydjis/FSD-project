import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Comments } from 'entities/Comments';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
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
            <div className={cls.header}>
                {comment?.user.avatar
                    ? (
                        <Avatar
                            className={cls.avatar_comment}
                            src={comment?.user.avatar}
                            width={30}
                            height={30}
                            border="50%"
                        />
                    )
                    : null}
                <Text title={comment?.user.username} />
            </div>
            <Text text={comment?.text} />
        </div>
    );
});
