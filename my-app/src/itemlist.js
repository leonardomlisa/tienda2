import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [figuras, setFiguras] = useState([]);

  useEffect(() => {
    // Simula una llamada a una API
    setFiguras([
      { id: 1, nombre: 'Figura de Goku', precio: 150, imagen: '/image/goku.jpg' },
      { id: 2, nombre: 'Figura de Naruto', precio: 200, imagen: '/image/naruto.jpg' },
      // Agrega más figuras aquí
    ]);
  }, []);

  return (
    <ul>
      {figuras.map(figura => (
        <li key={figura.id}>
          <Link to={`/producto/${figura.id}`}>
            <img src={figura.imagen} alt={figura.nombre} />
            {figura.nombre} - ${figura.precio}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;

