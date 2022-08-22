let list = [];
let total = 0;
let j = 0;
let list36 = [];
let total36 = 0;
let list50 = [];

while (j < 8){
    let num = parseInt(prompt('Ingrese un valor'));
    list.push(num);
    j++;
}

console.log(list);

for (i=0; i<list.length; i++){
    total += list[i];
    let uni = list[i]
    if (uni > 36){
        list36.push(uni);
    }
    if (uni > 50){
        list50.push(uni);
    }
}

for (i=0; i<list36.length; i++){
    total36 += list36[i];
}

console.log('El valor acumulado de todos los elementos es: ' + total);
console.log('El valor acumulado de números mayores a 36 es: ' + total36);
console.log('La cantidad de valor mayores a 50 es: ' + list50.length);

