import { createReducer, on } from '@ngrx/store';
import { AddFavoriteProduct, GetAllProducts, RemoveFavoriteProduct, GetFavProductsCount } from '../actions/product.actions';

export interface State {
    products: Array<any>;
    count: number;
}

const initialState: State = {
    products: [],
    count: 0
}

export const favoriteProductsReducer = createReducer(
    initialState,
    on(AddFavoriteProduct, (state, payload) => {
        const favProducts = JSON.parse(JSON.stringify(state.products));
        favProducts.push(payload);
        return {
            ...state,
            products: favProducts,
            count: favProducts.length
        };
    }),
    on(RemoveFavoriteProduct, (state, product) => {
        let favProducts = JSON.parse(JSON.stringify(state.products));
        favProducts = favProducts.filter((favProduct: any) => favProduct.id !== product.id);
        return {
            ...state,
            products: favProducts,
            count: favProducts.length
        };
    }),
    on(GetAllProducts, (state) => {
        let allProducts = JSON.parse(JSON.stringify(state.products));
        return {
            ...state,
            products: allProducts,
        };
    }),
    on(GetFavProductsCount, (state, productId) => {
        let favProducts = JSON.parse(JSON.stringify(state.products));
        return {
            ...state,
            count: favProducts.length
        };
    }),
);
