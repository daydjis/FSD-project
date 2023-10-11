import { StateSchema } from 'app/providers/StoreProvider';

export const getUserInit = (state: StateSchema) => state.user._init || false;
