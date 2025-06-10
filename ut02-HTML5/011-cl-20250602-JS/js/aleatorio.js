// Números aleatorios

let numAleatorio = document.querySelector("#aleatorio");
let num = 0;

// Math.random -> número aleatorio entre 0 y 1
// Math.floor -> redondea al entero inferior
// Math.ceil -> redondea al entero superior
// Math.round -> redondea al entero más próximo

num = Math.random() * 95 + 5;
numAleatorio.innerHTML = num;
