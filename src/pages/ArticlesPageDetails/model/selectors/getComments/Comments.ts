import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articlesDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.articlesDetailsComments?.error || '';
