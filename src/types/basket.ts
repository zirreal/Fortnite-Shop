export interface IBasket {
    id: string;
    name: string;
    price: number;
    quantity: number;
}


export interface IBasketItemProps {
    id: string;
    name: string;
    price: number;
    quantity: number;
}


export interface BasketState {
    order: IBasket[];
    isBasketShow: boolean;
}

export enum BasketActionTypes {
    SHOW_BASKET = 'SHOW_BASKET',
    ADD_TO_BASKET = 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',

}
interface ShowBasket {
    type: BasketActionTypes.SHOW_BASKET;
}

interface AddToBasket {
    type: BasketActionTypes.ADD_TO_BASKET;
    payload: any;
}

interface RemoveFromBasket {
    type: BasketActionTypes.REMOVE_FROM_BASKET;
    payload: string;
}

interface IncreaseQuantity {
    type: BasketActionTypes.INCREASE_QUANTITY;
    payload: string;
}

interface DecreaseQuantity {
    type: BasketActionTypes.DECREASE_QUANTITY;
    payload: string;
}
export type BasketAction = ShowBasket | AddToBasket | RemoveFromBasket | IncreaseQuantity | DecreaseQuantity