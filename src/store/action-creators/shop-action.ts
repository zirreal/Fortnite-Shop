import {ShopAction, ShopActionTypes} from "../../types/shop";
import {Dispatch} from "redux";
import axios from "axios";

// API
import {API_ITEMS, API_KEY, API_URL} from '../../config';

export const fetchGoods = () => {
    return async (dispatch: Dispatch<ShopAction>) => {
        try {
            dispatch({type: ShopActionTypes.FETCHING_GOODS})
            const response = await axios.get(API_URL, {
                headers: {
                    'Authorization': API_KEY!,
                }
            });
            dispatch({type: ShopActionTypes.FETCHED_GOODS, payload: response.data.shop})
        } catch (e: object | any) {
            dispatch({
                type: ShopActionTypes.FETCH_GOODS_ERROR,
                payload: 'Произошла ошибка при загрузке товаров' + e.message
            })
        }
    }
}


export const fetchGoodById = (id: string | undefined) => {
    return async (dispatch: Dispatch<ShopAction>) => {
        try {
            dispatch({type: ShopActionTypes.FETCHING_GOOD_ITEM})
            const res = await axios.get(`${API_ITEMS}&id=${id}`, {
                headers: {
                    'Authorization': API_KEY!,
                }
            });
            dispatch({type: ShopActionTypes.FETCHED_GOOD_ITEM, payload: res.data.item})
        } catch (e: object | any) {
            dispatch({
                type: ShopActionTypes.FETCH_GOOD_ITEM_ERROR,
                payload: 'Произошла ошибка при загрузке товара' + e.message
            })
        }
    }
}