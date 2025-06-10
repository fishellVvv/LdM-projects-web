// Tiempo

let tiempo = document.querySelector("#tiempo");
let segundos = 0;

// setInterval(función, tiempo(ms))

let intervalo = setInterval(function () {
  segundos++;
  tiempo.innerHTML = segundos;
}, 1000);

// setTimeout(función, tiempo(ms))

setTimeout(function () {
  clearInterval(intervalo);
  // alert("Se acabó el tiempo");
}, 5000);
