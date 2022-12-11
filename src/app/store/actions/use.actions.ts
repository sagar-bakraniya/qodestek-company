import { createAction, props } from '@ngrx/store';

export const Login = createAction(
    '[Login Page] Login',
    props<User>()
)

export const SingUp = createAction(
    '[Sign In Page] SIGN_IN',
    props<User>()
)

export const Logout = createAction(
    '[Sign In Page] SIGN_IN',
)



export type User = {
    username?: string;
    email: string;
    password: string;
}
