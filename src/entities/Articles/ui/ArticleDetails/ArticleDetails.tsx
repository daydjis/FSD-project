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
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleBlockCodeComponent } from 'entities/Articles/ui/ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockType } from 'entities/Articles/model/types/Articles';
import { ArticleBlockImageComponent } from 'entities/Articles/ui/ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from 'entities/Articles/ui/ArticleBlockTextComponent/ArticleBlockTextComponent';
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
    const isLoading = useSelector(getArticleDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchArticleById(String(id)));
    }, [id, dispatch]);

    const ArticleBlockList = Article?.blocks.map((block) => {
        switch (block.type) {
        case ArticleBlockType.CODE: {
            return <ArticleBlockCodeComponent key={block.id} block={block} />;
        }
        case ArticleBlockType.IMAGE: {
            return <ArticleBlockImageComponent key={block.id} block={block} />;
        }
        case ArticleBlockType.TEXT: {
            return <ArticleBlockTextComponent key={block.id} block={block} />;
        }
        default: {
            return null;
        }
        }
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton height={200} widht={200} border="50%" />
                <Skeleton height={50} widht="100%" />
                <Skeleton height={50} widht="100%" />
                <Skeleton height={200} widht={300} />
                <Skeleton height={400} widht="100%" />
                <Skeleton height={200} widht="100%" />
                <Skeleton height={200} widht={300} />
            </>
        );
    } else if (ArticleError) {
        content = (
            <Text theme={TextTheme.ERROR} title="Ошибка Статья не найдена" />
        );
    } else {
        content = (
            <>
                <div className={cls.ArticleDetailsTitle}>
                    <Avatar src={Article?.img} width={200} height={200} />
                    <Text title={String(Article?.title)} />
                    <Text text={`Просмотров: ${String(Article?.views)}`} />
                    <Text text={`Статья от ${Article?.createdAt}`} />
                </div>
                {ArticleBlockList}
            </>
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
