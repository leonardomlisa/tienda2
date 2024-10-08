import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.nombre} - ${item.precio}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartWidget;
