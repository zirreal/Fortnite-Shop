import * as BasketActionCreators from './basket-action'
import * as ShopActonCreators from './shop-action'

export default {
    ...BasketActionCreators,
    ...ShopActonCreators
}