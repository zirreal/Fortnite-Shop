import {ShopAction, ShopActionTypes, ShopState} from "../../types/shop";

const initialState: ShopState = {
    goods: [],
    good: null,
    loading: false,
    error: null
}

export const ShopReducer = (state = initialState, action: ShopAction): ShopState => {
    switch (action.type) {
        case ShopActionTypes.FETCHING_GOODS:
            return {loading: true, error: null, goods: [], good: null}
        case ShopActionTypes.FETCHED_GOODS:
            return {loading: false, error: null, goods: action.payload, good: null}
        case ShopActionTypes.FETCH_GOODS_ERROR:
            return {loading: false, error: action.payload, goods: [], good: null}
        case ShopActionTypes.FETCHING_GOOD_ITEM:
            return {loading: true, error: null, goods: [], good: null}
        case ShopActionTypes.FETCHED_GOOD_ITEM:
            return {loading: false, error: null, goods: [], good: action.payload}
        case ShopActionTypes.FETCH_GOOD_ITEM_ERROR:
            return {loading: false, error: action.payload, goods: [], good: null}
        default:
            return state
    }
}