import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'entities/Auth';
import { ProfileSchema } from 'entities/Profile';


export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    auth: AuthSchema,
    profile: ProfileSchema,
}
