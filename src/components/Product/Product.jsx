/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ProductStyled, ProductInfoStyled, ProductInfoTitleStyled } from './Product.styled';

export const Product = ({ product, handleAddToCart }) => (
  <ProductStyled>
    <img src={product.image} alt={product.title} />
    <ProductInfoStyled>
      <ProductInfoTitleStyled>
        {product.title}
        <span> ${product.price}</span>
      </ProductInfoTitleStyled>
      <p>{product.description}</p>
    </ProductInfoStyled>
    <button type="button" onClick={handleAddToCart(product)}>
      Comprar
    </button>
  </ProductStyled>
);