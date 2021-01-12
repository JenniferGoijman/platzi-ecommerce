import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import handleSumTotal from '../utils/index';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'Sin pedidos...'}</h3>
        {cart.map((item, i) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
            <button type="button" onClick={handleRemove(item, i)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $${handleSumTotal(cart)}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
