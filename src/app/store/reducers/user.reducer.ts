import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/use.actions';

export interface State {
    users: [];
    user: object,
    isLoggedIn: boolean,
}

const initialState: State = {
    users: [],
    user: {},
    isLoggedIn: false
}

export const userReducer = createReducer(
    initialState,

    on(UserActions.SingUp, (state, user) => {
        const users = JSON.parse(JSON.stringify(state.users));
        users.push(user)
        return {
            ...state,
            users,
        }
    }),

    on(UserActions.Login, (state, payload) => {
        const users = JSON.parse(JSON.stringify(state.users));
        const user = users.find((user: any) => user.email === payload.email && user.password === payload.password);
        return {
            ...state,
            user: user,
            isLoggedIn: user
        }
    }),

    on(UserActions.Logout, (state) => {
        return {
            ...state,
            user: {},
            isLoggedIn: false
        }
    })
);
