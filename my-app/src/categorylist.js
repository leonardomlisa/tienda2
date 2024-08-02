
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = ['Marvel', 'DC', 'Manga', 'Independiente'];

const CategoryList = () => {
  return (
    <div className="container mt-4">
      <h2>Categorías</h2>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
