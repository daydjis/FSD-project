import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticlesDetailsReducer } from 'entities/Articles/model/slice/ArticlesDetailsSlice';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Articles/model/service/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Articles/model/selectors/ArticleDetails';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articlesDetails: ArticlesDetailsReducer,
};
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();

    const Article = useSelector(getArticleDetailsData);
    const ArticleError = useSelector(getArticleDetailsError);
    const IsLoading = useSelector(getArticleDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchArticleById(String(id)));
    }, [id, dispatch]);

    let content;

    if (true) {
        content = (
            <>
                <Skeleton height={150} widht={150} border="50%" />
                <Skeleton height={50} widht="100%" />
                <Skeleton height={50} widht="100%" />
                <Skeleton height={200} widht="100%" />
                <Skeleton height={200} widht="100%" />
            </>
        );
    } else if (ArticleError) {
        content = (
            <Text theme={TextTheme.ERROR} title="Ошибка Статья не найдена" />
        );
    } else {
        content = (
            <div> Статья </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
