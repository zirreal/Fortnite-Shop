import React, {FC} from 'react'
import { NavLink } from "react-router-dom";

import { Layout, Menu } from 'antd';

// components
import Cart from './Cart'

const { Header: HeaderStyled} = Layout;

const Header: FC = () => {

  return (
    <HeaderStyled style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: '#820014'}}>
      <Cart/>
      <Menu theme="dark" style={{backgroundColor: '#820014'}} mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
            <NavLink to={'/'}>Products</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
            <NavLink to={'/thankYou'}>Thank you :)</NavLink>
        </Menu.Item>
      </Menu>
    </HeaderStyled>
  )
}

export default Header;
