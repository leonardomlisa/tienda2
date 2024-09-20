document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    { id: 1, nombre: 'Figura de Goku', precio: 150000, descripcion: 'Figura de Goku en Super Saiyan', imagen: goku, empresa: 'figura' },
    { id: 2, nombre: 'Figura de Naruto', precio: 200000, descripcion: 'Figura de Naruto en modo Sennin', imagen: naruto, empresa: 'figura2' },
    { id: 3, nombre: 'Figura de Batman', precio: 700000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanhottoys, empresa: 'Hot Toys' },
    { id: 4, nombre: 'Figura de Batman 2', precio: 500000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanIronStudios, empresa: 'Iron Studios' },
    { id: 5, nombre: 'Figura de Batman 3', precio: 900000, descripcion: 'Figura de Batman de The Dark Knight', imagen: batmanSideshow, empresa: 'Sideshow' },
  ];
  

  const contenedorProductos = document.getElementById('productos');

  productos.forEach(producto => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <p>Empresa: ${producto.empresa}</p>
      <button>Añadir al Carrito</button>
    `;

    contenedorProductos.appendChild(productoDiv);
  });
});
