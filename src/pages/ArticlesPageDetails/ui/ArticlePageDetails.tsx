import { ArticleDetails } from 'entities/Articles';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'entities/Articles/ui/ArticleBlockTextComponent/ArticleBlockTextComponent.module.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface ArticlesPageDetailsProps {
    classname?: any
}
const ArticlesPageDetails = (props: ArticlesPageDetailsProps) => {
    const { classname } = props;

    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticlePageDetails, {}, [classname])}>
                <Text theme={TextTheme.ERROR} title="Статья не найдена" />
            </div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticlesPageDetails;
