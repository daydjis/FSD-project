import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from 'entities/Profile/model/types/Profile';

export const fetchProfileData = createAsyncThunk<Profile, void, {rejectValue: string}>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            // @ts-ignore
            const response = await thunkAPI.extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
