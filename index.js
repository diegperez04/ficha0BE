const productos = [
  { id: "1", nombre: "Remera" },
  { id: "2", nombre: "Pantalon" },
  { id: "3", nombre: "Zapatilla" },
];

function listarProductos() {
  console.log(productos);
}

function sumarProducto(nombre) {
  productos.push({ id: productos.length + 1, nombre });
}

function buscarProducto(id) {
  console.log(productos.find((producto) => producto.id === id));
}

function modificarProducto(id, nombreNuevo) {
  const producto = productos.find((producto) => producto.id === id);
  if (producto) {
    producto.nombre = nombreNuevo;
    console.log(producto);
  }
}

sumarProducto("Campera");

listarProductos();

buscarProducto("2");

modificarProducto("3", "Mochila");
