import React, { useState, useEffect } from 'react';

const ItemDetail = ({ id }) => {
  const [figura, setFigura] = useState(null);

  useEffect(() => {
    // Simula una llamada a una API para obtener los detalles de la figura
    const figuras = [
      { id: 1, nombre: 'Figura de Goku', precio: 150, descripcion: 'Figura de Goku en Super Saiyan', imagen: '/image/goku.jpg' },
      { id: 2, nombre: 'Figura de Naruto', precio: 200, descripcion: 'Figura de Naruto en modo Sennin', imagen: '/image/naruto.jpg' },
      // Agrega más figuras aquí
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
      <ItemQuantitySelector />
      <AddItemButton figura={figura} />
    </div>
  );
};

export default ItemDetail;
