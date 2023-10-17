import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comments } from 'entities/Comments';

export const fetchArticleCommentById = createAsyncThunk<Comments[], string | undefined, ThunkConfig<string>>(
    'ArticlesComment/fetchArticleCommentById',
    async (articleID, thunkAPI) => {
        if (!articleID) {
            return thunkAPI.rejectWithValue('error');
        }
        try {
            const response = await thunkAPI.extra.api.get<Comments[]>('/comments/', {
                params: {
                    articleID,
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
