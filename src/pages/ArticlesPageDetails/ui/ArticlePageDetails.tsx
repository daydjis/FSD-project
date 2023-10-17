import { ArticleDetails } from 'entities/Articles';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentReducer, getArticleComment } from 'pages/ArticlesPageDetails/model/slice/ArticleComment';
import { useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchArticleCommentById,
} from 'pages/ArticlesPageDetails/model/service/fetchCommentByArtcleId/fetchCommentByArtcleId';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from 'pages/ArticlesPageDetails/model/selectors/getComments/Comments';
import cls from './ArticlePageDetails.module.scss';

interface ArticlesPageDetailsProps {
    classname?: any
}

const reducers: ReducersList = {
    articlesDetailsComments: articleDetailsCommentReducer,
};

const ArticlesPageDetails = (props: ArticlesPageDetailsProps) => {
    const { classname } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleCommentsIsLoading);

    const error = useSelector(getArticleCommentsError);

    const { id } = useParams<{id: string}>();

    const comments = useSelector(getArticleComment.selectAll);

    useEffect(() => {
        dispatch(fetchArticleCommentById(id));
    }, [id, dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticlePageDetails, {}, [classname])}>
                <Text theme={TextTheme.ERROR} title="Статья не найдена" />
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={cls.ArticleBlockTextComponent}>
                <ArticleDetails id={id} />
                <Text title="Комментарии" />
                <CommentList isLoading={isLoading} commentList={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPageDetails);
