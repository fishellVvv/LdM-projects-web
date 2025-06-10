function suma() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);

  let suma = num1 + num2;

  document.getElementById("resultado").innerHTML = suma;
}

function funconprompt() {
  let num1 = parseInt(prompt("Introduzca un numero"));
  let num2 = parseInt(prompt("Introduzca otro numero"));

  document.getElementById("resultado").innerHTML = num1 + num2;
}

funconprompt();
