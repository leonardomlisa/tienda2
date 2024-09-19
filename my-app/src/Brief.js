import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Brief = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Detalle de la Compra</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.precio, 0)}</p>
    </div>
  );
};

export default Brief;
