import React, {FC} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

import { ShoppingCartOutlined } from '@ant-design/icons';
import {IBasket} from "../types/basket";


const Cart: FC = () => {
    const {order} = useTypedSelector(state => state.basket);
    const quantity = order.reduce((sum: number, item: IBasket) => {
        return sum + item.quantity
    }, 0);

    const {handleBasketShow} = useActions();

  return (
    <div className='cart' onClick={handleBasketShow}>
      <ShoppingCartOutlined className="cart__icon" style={{fontSize: '30px', color: '#ccc'}} />
      {order.length > 0 ? <span className='cart__quantity'>{+quantity}</span> : null}
    </div>
  )
}
export default Cart;