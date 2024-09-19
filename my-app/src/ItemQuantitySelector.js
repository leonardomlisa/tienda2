import React, { useState } from 'react';

const ItemQuantitySelector = () => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(cantidad + 1);
  const decrementar = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cantidad}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
