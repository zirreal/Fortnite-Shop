import {combineReducers} from "redux";
import {ShopReducer} from "./shopReducer";
import {BasketReducer} from "./basketReducer";


export const rootReducer = combineReducers({
    shop: ShopReducer,
    basket: BasketReducer
})

export type RootState = ReturnType<typeof rootReducer>