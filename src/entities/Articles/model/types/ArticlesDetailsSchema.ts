import { Article } from './Articles';

export interface ArticlesDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
