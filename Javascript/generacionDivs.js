let x = prompt("Ingrese un valor numerico");
let y = prompt("Ingrese el otro número por favor");

let mensaje = '';

x = parseInt(x);
y = parseInt(y);

if (x > 0 && y > 0){
  console.log (mensaje);
}
else if (x < 0 && y > 0){
  console.log (mensaje);
}
else if (x > 0 && y < 0){
  console.log (mensaje);
}
else {
  console.log (mensaje);
}

const numeros = document.createElement("div");
const resultado = document.createElement("div");

numeros.textContent += "Numeros: " + String(numero1) + ", " + String(numero2);
numeros.setAttribute("class", "alert alert-primary");
document.getElementById("numeros").appendChild(numeros);

resultado.setAttribute("class", "alert alert-success");
resultado.textContent += "El resultado es: " + (numero1 + numero2);
document.getElementById("resultados").appendChild(resultado);
