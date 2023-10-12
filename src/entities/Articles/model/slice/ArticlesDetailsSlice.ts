import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesDetailsSchema } from 'entities/Articles/model/types/ArticlesDetailsSchema';
import { fetchArticleById } from 'entities/Articles/model/service/fetchArticleById/fetchArticleById';
import { Article } from 'entities/Articles';

const initialState: ArticlesDetailsSchema = {
    isLoading: false,
    error: '',
    data: undefined,
};
export const ArticlesDetailsSlice = createSlice({
    name: 'ArticlesDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
            });
    },
});

export const { actions: ArticlesDetailsActions } = ArticlesDetailsSlice;
export const { reducer: ArticlesDetailsReducer } = ArticlesDetailsSlice;
