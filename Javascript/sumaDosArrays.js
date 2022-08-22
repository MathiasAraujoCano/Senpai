let vector1 = [];
let vector2 = [];
let total = [];
let j = 0;
let k = 0;

while (j < 5){
    let num = parseInt(prompt('Ingrese un valor para el vector1'))
    vector1.push(num)
    j++
}

while (k < 5){
    let num = parseInt(prompt('Ingrese un valor para el vector2'))
    vector2.push(num)
    k++
}

for (i=0; i<vector1.length; i++){
    total.push(vector1[i] + vector2[i])
}

console.log('Primer array: ' + vector1)
console.log('Segundo array: ' + vector2)
console.log('La suma de los array por posición es: ' + total);