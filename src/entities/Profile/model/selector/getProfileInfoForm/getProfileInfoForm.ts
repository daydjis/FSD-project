import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileInfoForm = (state: StateSchema) => state.profile?.form;
