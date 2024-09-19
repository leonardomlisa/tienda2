import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [figura, setFigura] = useState(null);

  useEffect(() => {

    const figuras = [
      { id: 1, nombre: 'Figura de Goku', precio: 150, descripcion: 'Figura de Goku en Super Saiyan', imagen: '/image/batmanhottoys.jpg', empresa: 'Hot Toys' },
      { id: 2, nombre: 'Figura de Naruto', precio: 200, descripcion: 'Figura de Naruto en modo Sennin', imagen: '/image/naruto.jpg', empresa: 'Sideshow' },
      { id: 3, nombre: 'Figura de Batman', precio: 300, descripcion: 'Figura de Batman de The Dark Knight', imagen: '/image/batman.jpg', empresa: 'Hot Toys' },
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
      <p>Empresa: {figura.empresa}</p>
      <ItemQuantitySelector />
      <AddItemButton figura={figura} />
    </div>
  );
};

export default ItemDetailContainer;
