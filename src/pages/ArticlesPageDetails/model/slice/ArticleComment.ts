import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comments } from 'entities/Comments';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleCommentStateSchema } from 'pages/ArticlesPageDetails';
import {
    fetchArticleCommentById,
} from 'pages/ArticlesPageDetails/model/service/fetchCommentByArtcleId/fetchCommentByArtcleId';

const commentAdapter = createEntityAdapter<Comments>({
    selectId: (comment) => comment.id,
});

export const getArticleComment = commentAdapter.getSelectors<StateSchema>(
    (state) => state.articlesDetailsComments || commentAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentAdapter.getInitialState<ArticleCommentStateSchema>({
        isLoading: false,
        error: '',
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleCommentById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleCommentById.fulfilled, (state, action: PayloadAction<Comments[]>) => {
                state.isLoading = false;
                commentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleCommentById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
