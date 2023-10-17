import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CommentCard, Comments } from 'entities/Comments';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    commentList?: Comments[];
    isLoading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        commentList,
        isLoading,
    } = props;
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <Skeleton height={30} widht={30} />
                <Skeleton height={30} widht={30} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {commentList?.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ))}
        </div>
    );
});
