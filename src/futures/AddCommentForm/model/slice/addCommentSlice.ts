import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'futures/AddCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};
export const AddCommentSlice = createSlice({
    name: 'AddComment',
    initialState,
    reducers: {
        setComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProfileData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //             state.form = action.payload;
    //         })
    //         .addCase(fetchProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })
    //         .addCase(updateProfileData.pending, (state) => {
    //             state.isLoading = true;
    //             state.error = undefined;
    //         })
    //         .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
    //             state.isLoading = false;
    //             state.data = action.payload;
    //             state.form = action.payload;
    //         })
    //         .addCase(updateProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: AddCommentActions } = AddCommentSlice;
export const { reducer: AddCommentReducer } = AddCommentSlice;
