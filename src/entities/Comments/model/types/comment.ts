import { User } from 'entities/User';

export interface Comments {
    id: string;
    user: User;
    text: string;
}
