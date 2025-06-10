// Eventos desde el dom

let recuadro = document.querySelector("#recuadro");

function cambiarColor() {
  recuadro.style.background = "red";
}

// Eventos desde JS

let boton = document.querySelector("#boton2");

boton.addEventListener("click", moverCaja);

function moverCaja() {
  recuadro.style.width = "500px";
  recuadro.style.transition = "1s";
}
