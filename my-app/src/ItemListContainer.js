// src/components/ItemListContainer.js
import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, company }) => {

  const products = company ? `Products from ${company}` : 'All Products';

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>{products}</h2>
      <ul>
        {}
        <li><Link to="/product/1">Product 1</Link></li>
        <li><Link to="/product/2">Product 2</Link></li>
        <li><Link to="/product/3">Product 3</Link></li>
      </ul>
    </div>
  );
};

export default ItemListContainer;
