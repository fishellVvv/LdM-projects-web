// Bucles

// for -> repeticiones concretas o un rango
// while -> sin numero de repeticiones definido
// do-while -> sin numero de repeticiones definido con una iteración inicial

for (let i = 1; i <= 3; i++) {
  console.log("for:", i);
}

let n = 1;
while (n <= 3) {
  console.log("while:", n);
  n++;
}

let x = 1;
do {
  console.log("do-while:", x);
  x++;
} while (x <= 3);

// Bucles con dom

let cajas = document.querySelectorAll(".cajas");
console.log("Cajas", cajas);

for (let i = 0; i < cajas.length; i++) {
  cajas[i].style.width = "50px";
  cajas[i].style.height = "50px";
  cajas[i].style.background = "blue";
  cajas[i].style.marginTop = "5px";
  cajas[i].style.marginRight = "5px";
  cajas[i].style.display = "inline-block";
}
