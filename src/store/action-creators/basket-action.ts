import {BasketAction, BasketActionTypes} from "../../types/basket";

export function handleBasketShow(): BasketAction {
    return {type: BasketActionTypes.SHOW_BASKET}
}

export function addToBasket(id: string, name: string, price: number): BasketAction {
    return {type: BasketActionTypes.ADD_TO_BASKET, payload: {id, name, price}}
}

export function removeFromBasket(id: string): BasketAction {
    return {type: BasketActionTypes.REMOVE_FROM_BASKET, payload: id}
}

export function increaseQuantity(id: string): BasketAction {
    return {type: BasketActionTypes.INCREASE_QUANTITY, payload: id}
}

export function decreaseQuantity(id: string): BasketAction {
    return {type: BasketActionTypes.DECREASE_QUANTITY, payload: id}
}
