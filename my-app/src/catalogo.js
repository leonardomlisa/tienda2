import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const [figuras, setFiguras] = useState([]);

  useEffect(() => {
    setFiguras([
      { id: 1, nombre: 'Figura de Goku', precio: 150000, descripcion: 'Figura de Goku en Super Saiyan', imagen: goku, empresa: 'figura' },
      { id: 2, nombre: 'Figura de Naruto', precio: 200000, descripcion: 'Figura de Naruto en modo Sennin', imagen: naruto, empresa: 'figura2' },
      { id: 3, nombre: 'Figura de Batman', precio: 700000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanHotToys, empresa: 'Hot Toys' },
      { id: 4, nombre: 'Figura de Batman 2', precio: 500000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanIronStudios, empresa: 'Iron Studios' },
      { id: 5, nombre: 'Figura de Batman 3', precio: 900000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanSideshow, empresa: 'Sideshow' },
    ]);
  }, []);

  return (
    <div>
      <h2>Catálogo de Figuras Coleccionables</h2>
      <ul>
        {figuras.map(figura => (
          <li key={figura.id}>
            <Link to={`/producto/${figura.id}`}>
              <img src={figura.imagen} alt={figura.nombre} />
              {figura.nombre} - ${figura.precio} - {figura.empresa}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalogo;

