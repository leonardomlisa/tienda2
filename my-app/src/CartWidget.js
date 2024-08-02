
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css'; 

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget d-flex align-items-center">
      <FaShoppingCart size={24} />
      <span className="badge badge-danger ml-2">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
