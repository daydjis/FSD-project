import { Profile, ProfileSchema } from 'entities/Profile/model/types/Profile';
import { fetchProfileData } from './model/service/getProfileInfo/getProfileInfo';
import { updateProfileData } from './model/service/updateProfileInfo/updateProfileInfo';
import { profileActions, profileReducer } from './model/slice/ProfileSlice';

export {
    ProfileSchema,
    Profile,
    profileReducer,
    profileActions,
    fetchProfileData,
    updateProfileData,
};

export { getProfileError } from './model/selector/getProfileError/getProfileError';
export { getProfileLoading } from './model/selector/getProfileLoading/getProfileLoading';
export { getProfileInfo } from './model/selector/getProfileInfo/getProfileInfo';
export { getProfileReadonly } from './model/selector/getProfileReadonly/getProfileReadonly';
export { getProfileInfoForm } from './model/selector/getProfileInfoForm/getProfileInfoForm';
