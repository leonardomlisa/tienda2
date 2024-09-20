import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [figura, setFigura] = useState(null);

  useEffect(() => {

    const figuras = [
      { id: 1, nombre: 'Figura de Goku', precio: 150000, descripcion: 'Figura de Goku en Super Saiyan', imagen: goku, empresa: 'figura' },
      { id: 2, nombre: 'Figura de Naruto', precio: 200000, descripcion: 'Figura de Naruto en modo Sennin', imagen: naruto, empresa: 'figura2' },
      { id: 3, nombre: 'Figura de Batman', precio: 700000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanHotToys, empresa: 'Hot Toys' },
      { id: 4, nombre: 'Figura de Batman 2', precio: 500000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanIronStudios, empresa: 'Iron Studios' },
      { id: 5, nombre: 'Figura de Batman 3', precio: 900000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanSideshow, empresa: 'Sideshow' },
    ];
    const figuraEncontrada = figuras.find(f => f.id === parseInt(id));
    setFigura(figuraEncontrada);
  }, [id]);

  if (!figura) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{figura.nombre}</h2>
      <img src={figura.imagen} alt={figura.nombre} />
      <p>{figura.descripcion}</p>
      <p>Precio: ${figura.precio}</p>
      <p>Empresa: {figura.empresa}</p>
      <ItemQuantitySelector />
      <AddItemButton figura={figura} />
    </div>
  );
};

export default ItemDetailContainer;
