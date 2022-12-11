import { createSelector, createFeatureSelector } from '@ngrx/store';

export const products = 'products';
export const users = 'users';

export interface FeatureState {
    products: any;
    count: number;
    users: Array<any>;
    isLoggedIn: boolean;
    user: object;
}

export interface AppState {
    products: FeatureState;
    users: FeatureState;
}

export const selectFeatureCount = createSelector(
    createFeatureSelector('favoriteProducts'),
    (state: FeatureState) => state.count
);


export const selectFavoriteProducts = createSelector(
    createFeatureSelector('favoriteProducts'),
    (state: FeatureState) => state.products
);

export const selectUsers = createSelector(
    createFeatureSelector('user'),
    (state: FeatureState) => state.users
);


export const isLoggedIn = createSelector(
    createFeatureSelector('user'),
    (state: FeatureState) => state.isLoggedIn
);
