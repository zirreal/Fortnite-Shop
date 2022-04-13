import React, {FC} from "react";

import { Layout} from 'antd';

const { Footer: FooterStyled } = Layout;


const Footer: FC = () => {
  return (
    <FooterStyled
      style={{ textAlign: "center", color: "#eee", backgroundColor: "#820014" }}
    >
      e-commerce ©2022 by zirreal
    </FooterStyled>
  );
}

export default Footer;
