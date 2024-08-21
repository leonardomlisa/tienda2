// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">tienda coleccionables</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/iron-studios">Iron Studios</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sideshow">Sideshow</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/hot-toys">Hot Toys</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
