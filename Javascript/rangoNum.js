let numberLow = number('Ingrese el valor más chico')
let numberHigh = number('Ingrese el valor más grande')
let rangeFinal = final(numberLow, numberHigh);


function number(msj){
    let value = parseInt(prompt(msj))
    return value;
}

function final (valueLow, valueHigh){
    if (valueLow > valueHigh){
        valueLow = valueHigh;
    }
    let output = Array.from({length: valueHigh - valueLow + 1}, (v , i) => i + valueLow);
    console.log(output);
    return output;
}


/* function rango (menor,mayor){
    let i=menor;
    while(i<=mayor){
        console.log(i)
        i++
    }
*/
