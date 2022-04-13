import React, {FC} from 'react'
import { Link } from "react-router-dom";
import {useActions} from "../hooks/useActions";

// interface
import {ICombinedGoodsItem} from "../types/shop";


import { Card, Button, message } from 'antd';

const { Meta } = Card;


const GoodsItem: FC<ICombinedGoodsItem> = ({mainId, displayName, displayDescription, price, displayAssets}) => {

  const {addToBasket} = useActions()

  const img =  displayAssets[0].full_background;

  const success = () => {
    message.success(`Товар: ${displayName} успешно добавлен в корзину`);
  };

  const handleClick = () => {
    success();
    addToBasket(mainId, displayName, price.finalPrice);
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={displayName} src={img}
      />
    }
    >
      <Meta title={displayName} description={displayDescription !== '' ? displayDescription : 'Описание потерялось...'} />
      <div className="card__info">
        <p className="card__price">{price.finalPrice}</p>
        <Link to={`/${mainId}`} className={'link ant-btn-dangerous'} > узнать больше </Link>
        <Button
            className='btn'
            type="primary"
            danger
            onClick={() => handleClick()}
        >
          Купить
        </Button>
      </div>
    </Card>
  )
}

export default GoodsItem;