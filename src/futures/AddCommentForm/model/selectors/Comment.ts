import { StateSchema } from 'app/providers/StoreProvider';

export const commentValue = (state: StateSchema) => state.addCommentForm?.text || '';
