const express = require("express");
const app = express();

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
  return productos.find((producto) => producto.id === id);
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

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi backend");
});

app.get("/productos/:id", (req, res) => {
  const id = req.params.id;

  res.json(buscarProducto(id));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
