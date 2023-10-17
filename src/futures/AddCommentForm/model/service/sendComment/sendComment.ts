import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthUserData } from 'entities/User';
import { commentValue } from 'futures/AddCommentForm/model/selectors/Comment';
import { getArticleDetailsData } from 'entities/Articles/model/selectors/ArticleDetails';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Comments } from 'entities/Comments';
import {
    fetchArticleCommentById,
} from 'pages/ArticlesPageDetails/model/service/fetchCommentByArtcleId/fetchCommentByArtcleId';
import { AddCommentActions } from 'futures/AddCommentForm/model/slice/addCommentSlice';

export const sendComment = createAsyncThunk<Comments, void, ThunkConfig<string>>(
    'sendComments',
    async (authData, thunkAPI) => {
        const text = commentValue(thunkAPI.getState());
        const userData = getAuthUserData(thunkAPI.getState());
        const article = getArticleDetailsData(thunkAPI.getState());
        // const dispatch = useAppDispatch();

        if (!text || !userData || !article) {
            return thunkAPI.rejectWithValue('error');
        }
        try {
            const response = await thunkAPI.extra.api.post<Comments>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(AddCommentActions.setComment(''));
            thunkAPI.dispatch(fetchArticleCommentById(String(article.id)));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
