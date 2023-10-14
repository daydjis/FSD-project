import { ArticleDetails } from 'entities/Articles';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comments';
import cls from './ArticlePageDetails.module.scss';

interface ArticlesPageDetailsProps {
    classname?: any
}
const ArticlesPageDetails = (props: ArticlesPageDetailsProps) => {
    const { classname } = props;

    const { id } = useParams<{id: string}>();
    const list = [{ id: '1', user: { id: '1', username: 'ilya2' }, text: 'some commnet' },
        { id: '1', user: { id: '1', username: 'ilya2' }, text: 'some commnet' }];
    if (!id) {
        return (
            <div className={classNames(cls.ArticlePageDetails, {}, [classname])}>
                <Text theme={TextTheme.ERROR} title="Статья не найдена" />
            </div>
        );
    }

    return (
        <div className={cls.ArticleBlockTextComponent}>
            <ArticleDetails id={id} />
            <Text title="Комментарии" />
            <CommentList commentList={list} />
        </div>
    );
};

export default ArticlesPageDetails;
