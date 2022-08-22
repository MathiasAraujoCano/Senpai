let heigths = Array();
let a = 0;
let i = 0;
let total = 0;

while (a < 5){
    let heigth = parseInt(prompt('Ingrese una altura: '));
    heigths.push(heigth);
    a++;
}

function getAverage(heigths){
    while ( i < heigths.length){
        total = total + heigths[i];
        i++;
    }
    return total / heigths.length;
}

let promedio = getAverage(heigths);

console.log (promedio);
