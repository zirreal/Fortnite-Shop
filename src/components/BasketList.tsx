import React, {FC} from 'react'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { ConfigProvider, List, Divider, Space, Button } from 'antd';
import { CloseCircleTwoTone} from '@ant-design/icons';

// components
import BasketItem from './BasketItem';
import Empty from './Empty';

// interface
import {IBasket} from "../types/basket";

const BasketList: FC  = () => {

  const {order} = useTypedSelector(state => state.basket)
  const {handleBasketShow} = useActions()
  console.log(order)

  const totalPrice = order.reduce((sum: number, item: IBasket) => {
    return sum + item.price * item.quantity
  }, 0);

  return (
    <div className='modal modal__cart'>
      <div className="modal__dialog">
        <Space className='modal-top__wrapper'>
          <Divider orientation="left">Корзина</Divider>
          <CloseCircleTwoTone 
            className='icon-delete' 
            twoToneColor="#820014"
            onClick={handleBasketShow}
          />
        </Space>
        <ConfigProvider renderEmpty={() => Empty('Корзина пуста')}>
          <List
            size="small"
            header={<div>Товаров в корзине: </div>}
            footer={<div className='cart__footer'>
              <span>Общая стоимость товаров: {totalPrice} руб</span>
              <Button type='primary' danger>Оформить заказ</Button>
            </div>}
            bordered
            dataSource={order}
            renderItem={item => <BasketItem {...item} />
            }
          />
        </ConfigProvider>
      </div>
    </div>
  )
}


export default BasketList;