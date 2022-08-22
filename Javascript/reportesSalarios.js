let sueldos = [100, 265, 500, 410, 290];
let i = 0;
let low = 0;
let high = 0;
let totalHigh = 0;
let totalLow = 0;
let total = 0;

while (i < sueldos.length){
    if (sueldos[i] > 300){
        high++;
        totalHigh = totalHigh + sueldos[i];
    }else{
        low++;
        totalLow = totalLow + sueldos[i];
    }
    i++;
    total = totalHigh + totalLow;
}

console.log ('Sueldos bajos cobran ' + low + ' empleados.')
console.log ('Sueldos altos cobran ' + high + ' empleados.')
console.log ('La empresa gasta un total de ' + total + ' pesos en sueldos.')