// Funciones -> funtion nombre(parametros){codigo}

// sin parámetros
function saludo() {
  console.log("Hola mundo");
}

saludo();

// con parámetros
let nombre = "Antonio";

function saludo2(par1) {
  console.log("Hola", par1);
}

saludo2(nombre);

// con return y sin parámetros
function retorno1() {
  let numero = 5;
  return numero;
}

console.log(retorno1());

// con return y con parámetros
function retorno2(num1, num2) {
  suma = num1 + num2;
  return suma;
}

console.log(retorno2(5, 10));
