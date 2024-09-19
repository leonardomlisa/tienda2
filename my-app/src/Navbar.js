import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Mi E-commerce</h1>
      <ul>
        <li><Link to="/">Catálogo</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
