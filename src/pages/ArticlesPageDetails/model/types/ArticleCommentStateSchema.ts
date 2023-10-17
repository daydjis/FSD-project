import { Comments } from 'entities/Comments';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleCommentStateSchema extends EntityState<Comments>{
    isLoading: boolean;
    error: string | undefined;
}
