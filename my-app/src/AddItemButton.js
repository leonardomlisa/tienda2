import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const AddItemButton = ({ figura }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <button onClick={() => addToCart(figura)}>Añadir al Carrito</button>
  );
};

export default AddItemButton;
