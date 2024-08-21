// src/components/ItemListContainer.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', image: '/images/products/product1.jpg' },
  { id: 2, name: 'Product 2', image: '/images/products/product2.jpg' },
  { id: 3, name: 'Product 3', image: '/images/products/product3.jpg' },
];

const ItemListContainer = ({ greeting, company }) => {
  // Filtra productos por empresa si es necesario
  const filteredProducts = company
    ? products.filter(product => product.company === company)
    : products;

  return (
    <div>
      <h1>{greeting}</h1>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
