import React, {FC} from 'react'
import {useActions} from "../hooks/useActions";
import { List, Space } from 'antd';
import { DeleteOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';


// interface
import {IBasketItemProps} from "../types/basket";

interface IconProps {
  icon: React.ComponentType;
  text?: string | number;
  action: (arg: string) => void;
  arg: string;
}

const IconText: FC<IconProps> = ({ icon, text, action, arg }) => (
  <Space style={{cursor: 'pointer'}} onClick={() => action(arg)}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const BasketItem: FC<IBasketItemProps> = ({id, name, price, quantity}) => {
  const {removeFromBasket, increaseQuantity, decreaseQuantity} = useActions()

  return (
    <List.Item
      key={id}
      actions={[
        <IconText icon={DeleteOutlined} text={price * quantity} key="list-vertical-delete-o" action={removeFromBasket} arg={id} />,
      ]}
    >
    <List.Item.Meta
      title={<a href={'#!'}>{name}</a>}
      description={price * quantity}
    />
    <IconText icon={PlusOutlined} key="list-vertical-plus-o" action={increaseQuantity} arg={id} />
    <span className="item__quantity">{quantity} </span>
    <IconText icon={MinusOutlined} key="list-vertical-minus-o" action={decreaseQuantity} arg={id} />
    </List.Item>
  )
}

export default  BasketItem;
