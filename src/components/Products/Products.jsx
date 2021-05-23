import React, { useContext } from 'react';
import { Product } from '../Product';
import AppContext from '../../context/AppContext';

import { ProductsStyled, ProductsItemsStyled } from './Products.styled';

export const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <ProductsStyled>
      <ProductsItemsStyled>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </ProductsItemsStyled>
    </ProductsStyled>
  );
};