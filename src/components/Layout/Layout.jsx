import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainStyled } from './Layout.styled';

export const Layout = ({ children }) => (
  <MainStyled>
    <Header />
    {children}
    <Footer />
  </MainStyled>
);