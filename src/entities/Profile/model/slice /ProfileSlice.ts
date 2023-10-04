import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/types/Profile';

const initialState: ProfileSchema = {
    data: undefined,
    readonly: true,
    isLoading: false,
    error: undefined,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
