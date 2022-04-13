import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

import { Image, Space, Button } from 'antd';

// components
import Spinner from "../components/Spinner";
import Error from "../components/Error";


const GoodsItemPage: FC = () => {
    const {Id} = useParams();
    const {good, error, loading} = useTypedSelector(state => state.shop)
    const {fetchGoodById, addToBasket } = useActions()

    // получаемы товары
    useEffect(() => {
        fetchGoodById(Id);
    }, [Id]);

    console.log(good)
    return (
        <div>
            {loading && <Spinner/>}
            {good &&
                <div className="good" style={{backgroundImage: `url('${good.images.featured}')`}}>
                    <Space size={"middle"} className={'good__wrapper'} >
                        <Image
                            width={200}
                            className={'good__img'}
                            src={good?.images.icon_background}
                        />
                        <div className="good__info">
                            <h2 className="good__title">{good.name}</h2>
                            <p className="good__descr">{good.description}</p>
                            <div className="good__rarity">
                                Редкость: <span>{good.rarity.name}</span>
                            </div>
                            <div className="good__type">
                                Вид: <span>{good.type.name}</span>
                            </div>
                            <p className="good__introduction">{good.introduction?.text}</p>
                            <div className="good__dates">
                                <p className="good__release">Первое появление: <span>{good.releaseDate}</span></p>
                                <p className="good__lastapp">Последнее появление: <span>{good.lastAppearance}</span> </p>
                            </div>
                            <div className="good__bottom">
                                <div className="good__price">
                                    Цена: <span>{good.price} руб</span>
                                </div>
                                <Button onClick={() => addToBasket(good?.id, good?.name, good?.price)} type={"primary"} danger>Купить</Button>
                            </div>
                        </div>
                    </Space>
                </div>
            }
            {error && <Error text={error}/>}
        </div>
    );
};

export default GoodsItemPage;