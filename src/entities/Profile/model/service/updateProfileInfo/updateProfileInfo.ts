import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile/model/types/Profile';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileInfoForm } from 'entities/Profile/model/selector/getProfileInfoForm/getProfileInfoForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        try {
            const formData = getProfileInfoForm(thunkAPI.getState());

            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData);

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
