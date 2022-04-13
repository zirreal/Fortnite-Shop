import {useEffect, FC} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

// components
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import GoodsList from "../components/GoodsList";


const ShopPage: FC = () => {

    const {goods, error, loading} = useTypedSelector(state => state.shop)
    const {fetchGoods } = useActions()

    // получаемы товары
    useEffect(() => {
        fetchGoods();
    }, []);

    return (
        <main
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
        >
            {loading ? <Spinner/> : <GoodsList goods={goods}/>}
            {error && <Error text={error} />}
        </main>
    );
}


export default ShopPage;