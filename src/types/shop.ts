import {IAPI, IApiPrice, IAPIById} from "./API";

export interface ICombinedGoodsItem {
    mainId: string;
    displayName: string;
    displayDescription: string;
    displayAssets: any [];
    price: IApiPrice;
}

export interface GoodsListProps {
    goods: IAPI[]
}

export interface ShopState {
    goods: IAPI[];
    good: IAPIById | null;
    loading: boolean;
    error: null | string;
}

export enum ShopActionTypes {
    FETCHING_GOODS = 'FETCHING_GOODS',
    FETCHED_GOODS = 'FETCHED_GOODS',
    FETCH_GOODS_ERROR = 'FETCH_GOODS_ERROR',
    FETCHING_GOOD_ITEM = 'FETCHING_GOOD_ITEM',
    FETCHED_GOOD_ITEM = 'FETCHED_GOOD_ITEM',
    FETCH_GOOD_ITEM_ERROR = 'FETCH_GOOD_ITEM_ERROR'
}

interface FetchingGoods {
    type: ShopActionTypes.FETCHING_GOODS;
}

interface FetchedGoods {
    type: ShopActionTypes.FETCHED_GOODS;
    payload: IAPI[];
}

interface FetchGoodsError {
    type: ShopActionTypes.FETCH_GOODS_ERROR;
    payload: string;
}

interface FetchingGoodItem {
    type: ShopActionTypes.FETCHING_GOOD_ITEM;
}

interface FetchedGoodItem {
    type: ShopActionTypes.FETCHED_GOOD_ITEM;
    payload: IAPIById;
}

interface FetchGoodItemError {
    type: ShopActionTypes.FETCH_GOOD_ITEM_ERROR;
    payload: string;
}

export type ShopAction = FetchingGoods | FetchedGoods | FetchGoodsError | FetchingGoodItem | FetchedGoodItem | FetchGoodItemError;