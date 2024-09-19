import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={`/image/${item.image}`} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
