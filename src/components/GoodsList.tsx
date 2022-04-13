import React, {FC} from 'react'

// components
import GoodsItem from './GoodsItem'

// interface
import {GoodsListProps} from "../types/shop";

const GoodsList: FC<GoodsListProps> = ({goods = []}) => {
  return (
    <div className='cards'>
      {goods.length ?
        goods.map(good => (
          <GoodsItem key={good.mainId} {...good} />
        )) : 'nothing here'
      }
    </div>
  )
}

export default GoodsList