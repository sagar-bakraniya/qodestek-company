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

export const selectFavoriteProducts = createSelector(
    createFeatureSelector('favoriteProducts'),
    (state: FeatureState) => state.products
);
