import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import { HeaderStyled, HeaderTitleStyled, HeaderCheckoutStyled, HeaderAlertStyled } from './Header.styled';

export const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <HeaderStyled>
      <HeaderTitleStyled>
        <Link to="/">PlatziConf Merch</Link>
      </HeaderTitleStyled>
      <HeaderCheckoutStyled>
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <HeaderAlertStyled>{cart.length}</HeaderAlertStyled>}
      </HeaderCheckoutStyled>
    </HeaderStyled>
  );
};