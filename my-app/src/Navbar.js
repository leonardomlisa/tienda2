// src/components/Navbar.js
import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">MyApp</a>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
