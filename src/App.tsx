import {FC} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypedSelector";

import { Layout } from 'antd';
import 'antd/dist/antd.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import BasketList from "./components/BasketList";

// pages
import ShopPage from './pages/shopPage';
import GoodsItemPage from "./pages/goodsItemPage";
import Page404 from "./pages/page404";
import ThankYouPage from "./pages/thankYouPage";


const { Content } = Layout;

const App: FC = () => {

    const {isBasketShow} = useTypedSelector(state => state.basket)

    return (
        <Router basename='/Fortnite-Shop'>
            <Layout>
                <Header/>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Routes>
                        <Route path="/" element={<ShopPage/>} />
                        <Route path=":Id" element={<GoodsItemPage/>} />
                        <Route path="/thankYou" element={<ThankYouPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                    {isBasketShow && <BasketList/>}
                </Content>
                <Footer />
            </Layout>
        </Router>

    );
}

export default App;

