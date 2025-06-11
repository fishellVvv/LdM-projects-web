/*CREA UN EJERCICIO TRABAJANDO CON EVENTOS, EL CUAL
ME PERMITA CAMBIAR DE COLOR UN DIV DE AZUL A ROJO, PULSANDO UN BOTÓN
Y UNA VEZ SE CAMBIE DE COLOR, VOLVIENDO A PULSAR EL BOTÓN, VUELVA
A SU COLOR ORIGINAL (AZUL).
De la misma manera hay que hacer que el botón de mover caja cambie el tamaño.
*/

let caja = document.querySelector("#recuadro");
let boton = document.querySelector("#boton2");

boton.addEventListener("click", moverCaja);

function cambiarColor() {
  if (caja.style.backgroundColor === "blue") {
    caja.style.backgroundColor = "red";
  } else {
    caja.style.backgroundColor = "blue";
  }
}

function moverCaja() {
  recuadro.style.transition = "1s";

  if (recuadro.style.width === "20%") {
    recuadro.style.width = "400px";
  } else {
    recuadro.style.width = "20%";
  }
}
