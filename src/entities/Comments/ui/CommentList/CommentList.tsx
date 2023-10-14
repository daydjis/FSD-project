import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { CommentCard, Comments } from 'entities/Comments';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    commentList?: Comments[];
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        commentList,
    } = props;
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {commentList?.map((comment) => (
                <CommentCard comment={comment} />
            ))}
        </div>
    );
});
