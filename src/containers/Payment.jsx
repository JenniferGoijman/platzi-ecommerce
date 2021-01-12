import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import handleSumTotal from '../utils/index';

const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const { CLIENTE_ID } = process.env;

  const paypalOptions = {
    clientId: CLIENTE_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <h4>{item.title}</h4>
            <span>{`$${item.price}`}</span>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={() => console.log(data)}
            onPaymentError={() => console.log(error)}
            onPaymentCancel={() => console.log(data)}
          />
        </div>
      </div>
      <div>Sidebar</div>
    </div>
  );
};

export default Payment;
