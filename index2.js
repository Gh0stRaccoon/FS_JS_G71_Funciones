const libros = [
  {
    id: 1,
    nombre: "Libro uno",
    precio: 12000,
    enTienda: false,
    categoria: "Infantil",
    stock: 0,
  },
  {
    id: 2,
    nombre: "Libro dos",
    precio: 12000,
    enTienda: true,
    categoria: "Adultos",
    stock: 100,
  },
  {
    id: 3,
    nombre: "Libro tres",
    precio: 12000,
    enTienda: false,
    categoria: "Infantil",
    stock: 10,
  },
  {
    id: 4,
    nombre: "Libro cuatro",
    precio: 12000,
    enTienda: true,
    categoria: "Adultos",
    stock: 30,
  },
  {
    id: 5,
    nombre: "Libro cinco",
    precio: 12000,
    enTienda: false,
    categoria: "Infantil",
    stock: 90,
  },
  {
    id: 6,
    nombre: "Libro seis",
    precio: 12000,
    enTienda: true,
    categoria: "Infantil",
    stock: 0,
  },
];

const renderBook = ({ nombre, precio, categoria, stock, enTienda }) => {
  return `<div class="libro ${enTienda ? "entienda" : ""} ${
    categoria === "Adultos" ? "peligro" : ""
  }">
    <h2>${nombre}</h2>
    <p>${precio}</p>
    <p>${categoria}</p>
    <p>${stock}</p>
    <p>${enTienda && stock ? "Disponible" : "No disponible"}</p>
    </div>`;
};

let librosVentaHTML = "";
let librosPorLlegarHTML = "";

for (const libro of libros) {
  if (libro.enTienda) {
    librosVentaHTML += renderBook(libro);
  } else {
    librosPorLlegarHTML += renderBook(libro);
  }
}

const contenedorPorLlegar = document.querySelector("#libros_por_llegar");
const contenedorEnVenta = document.querySelector("#libros_en_venta");

contenedorEnVenta.innerHTML += librosVentaHTML;
contenedorPorLlegar.innerHTML += librosPorLlegarHTML;


// destructuring
//arrays
//spread operator (son los tres puntitos)
const [nombre, ...rest] = ["Camila", "Gonzalez", 23]
console.log(...rest)

//objects

const {nombre: nombre2, ...rest2} = {nombre: "camilo", apellido: "Gonzalez", edad: 23}

console.log(nombre2, rest2)