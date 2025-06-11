// Variables -> let/var + nombre = valor;

// numéricas
let numero = 20;
console.log("Número:", numero);

// texto
let palabras = "hola mundo";
console.log("Mensaje:", palabras);

// booleanas
let booleana = true;
console.log("Booleana:", booleana);

// array
let colores = ["Rojo", "Verde", "Azul"];
console.log("Color:", colores[1]);

// objetos (Object{propiedad:valor})
let zumo = {
  ingrediente1: "Naranja",
  ingrediente2: "Azucar",
  ingrediente3: "Agua",
};
console.log("Zumo:", zumo.ingrediente1);

// DOM: Modelo de objetos del documento
let caja = document.querySelector("#caja");
console.log("Caja:", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

let cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);
