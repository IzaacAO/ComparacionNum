const prompt = require("prompt-sync")();
let n1=0;
let n2=0;
let n3=0;
let mayor;
let menor;
   

n1= Number(prompt("Digite el primer numero: "));
   console.log("Escojiste el:, " + n1);

n2= Number(prompt("Digite el segundo numero: "));
   console.log("Escojiste el:, " + n2);

n3= Number(prompt("Digite el tercer numero:"));
   console.log("Escojiste el:, " + n3);

 if (n1 >= n2 && n1 >= n3) {
  mayor = n1;
  } else if (n2 >= n3) {
  mayor = n2;
  } else {
  mayor = n3;
}
  if (n1 <= n2 && n1 <= n3) {
  menor = n1;
  } else if (n2 <= n3) {
  menor = n2;
  } else {
  menor = n3;
}

let central;

if ((n1 >= n2 && n1 <= n3) || (n1 <= n2 && n1 >= n3)) {
  central = n1;
} else if ((n2 >= n1 && n2 <= n3) || (n2 <= n1 && n2 >= n3)) {
  central = n2;
} else {
  central = n3;
}

console.log("Mayor: " + mayor);
console.log("Central: " + central);
console.log("Menor: " + menor);






   

