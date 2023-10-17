import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { AddCommentActions, AddCommentReducer } from 'futures/AddCommentForm/model/slice/addCommentSlice';
import { useSelector } from 'react-redux';
import { commentValue } from 'futures/AddCommentForm/model/selectors/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button/Button';
import { sendComment } from 'futures/AddCommentForm/model/service/sendComment/sendComment';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
    } = props;

    const reducers: ReducersList = {
        addCommentForm: AddCommentReducer,
    };

    const dispatch = useAppDispatch();
    const commentText = useSelector(commentValue);

    const onChangeComment = useCallback((value: string) => {
        dispatch(AddCommentActions.setComment(value));
    }, [dispatch]);

    const onSendComment = useCallback(() => {
        dispatch(sendComment());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    type="text"
                    value={commentText}
                    onChange={onChangeComment}
                />
                <Button
                    onClick={onSendComment}
                >
                    Отправить
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
