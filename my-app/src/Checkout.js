import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
      <button>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
