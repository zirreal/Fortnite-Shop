import {BasketAction, BasketActionTypes, BasketState} from "../../types/basket";

const initialState: BasketState = {
    order: [],
    isBasketShow: false,
}

export const BasketReducer = (state = initialState, action: BasketAction): BasketState => {
    switch (action.type) {
        case BasketActionTypes.SHOW_BASKET:
            return {...state, isBasketShow: !state.isBasketShow}
        case BasketActionTypes.ADD_TO_BASKET:
            const itemIndex = state.order.findIndex(el => el.id === action.payload.id);

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {...action.payload, quantity: 1};
                newOrder = ([...state.order, newItem]);
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                })}

            return {
                ...state,
                order: newOrder,
            }

        case BasketActionTypes.REMOVE_FROM_BASKET:
            return {
                ...state,
                order: state.order.filter((el) => el.id !== action.payload),
            };

        case BasketActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === action.payload) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                })
            };

        case BasketActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === action.payload) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };

        default:
            return state
    }
}