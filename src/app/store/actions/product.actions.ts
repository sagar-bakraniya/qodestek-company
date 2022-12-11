import { createAction, props } from "@ngrx/store";

export const AddFavoriteProduct = createAction(
    'Add Favorite Product',
    props<any>()
)

export const RemoveFavoriteProduct = createAction(
    'Remove Favorite Product',
    props<any>()
)

export const GetAllProducts = createAction(
    'Get All Products',
    props<{ page?: number }>()
)


export const GetFavProductsCount = createAction(
    'Get Favorite Products Count',
    props<any>()
)
