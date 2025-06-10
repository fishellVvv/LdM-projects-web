// Condicionales

// >, <, >0, <=, ==, ===, !=, !==, &&, ||,

let a = 5;
let b = 10;

if (a > b) {
  console.log("a es mayor que b");
} else if (a === b) {
  console.log("a es igual que b");
} else {
  console.log("a es menor que b");
}

let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("Voy a estudiar JS");
    break;
  case "Martes":
    console.log("Voy a estudiar Java");
    break;
  case "Miercoles":
    console.log("Voy a estudiar SQL");
    break;
  default:
    console.log("Voy a descansar");
}
