// ejercico 1.3

// para validad si no es numero isNaN

let empleado = 'Pedro';
let sueldo = 30000;
const edad = 25;

console.log("El empleado " + empleado + " de " + edad + " años, tiene un sueldo de $ " + sueldo);


// ejercicio 1.4

let day = 25;
let month = 12;
let year = 2012;

if (day == 25 && month == 12){
    console.log("La fecha indicada es Navidad")
}
else{
    console.log("La fecha indicada no es Navidad")
}


// ejercicio desafio matematico

let numberA = 4;
let numberB = 4;
let numberC = 4;

if (numberA == numberB && numberA == numberC){
    let result = (numberA + numberB) * numberC;
    console.log ('El resultado es: ' + result);
}
else{
    console.log ('Los números ingresados no son todos iguales')
}

// ejercicio ¿son menores?

let numberQ = 7;
let numberW = 5;
let numberE = 1;

if (numberQ < 10 && numberW < 10 && numberE < 10){
    //console.log ('Todos los números ingresados son menores a 10')
    //let elemento = document.getElementById("mensaje"); // obtiene por ID 
    //elemento.innerHTML = "Todos los números son menores a 10"; // escribe en la pantalla
}
else{
    console.log ('No todos los números ingresados son menores a 10')
}

// ejercicio coordenadas

let ejeX = 2; //parseInt(prompt("Ingrese una coordenada: "))
let ejeY = -7;

if (ejeX > 0 && ejeY > 0){
    console.log ('Las coordenadas pertenecen al 1° cuadrante')
}
else if (ejeX < 0 && ejeY > 0){
    console.log ('Las coordenadas pertenecen al 2° cuadrante')
}
else if (ejeX > 0 && ejeY < 0){
    console.log ('Las coordenadas pertenecen al 3° cuadrante')
}
else if (ejeX < 0 && ejeY < 0){
    console.log ('Las coordenadas pertenecen al 4° cuadrante')
}
else{
    console.log ('Las coordenadas están en el eje')
}

// ejercicio día de aumentos

let sueldoOperario = 512; // getNumberFromPrompt(text, defaultValue);
let antiguedad = 4;

/*function getNumberFromPrompt(text,defaultValue){
    return parseInt(prompt(text, defaultValue))
}*/

if (sueldoOperario < 500 && antiguedad >= 10){
    let aumento = sueldoOperario * 1.2;
    console.log ('El sueldo a cobrar es de: ' + aumento)
}
else if (sueldoOperario < 500 && antiguedad < 10){
    let aumento2 = sueldoOperario * 1.05;
    console.log ('El sueldo a cobrar es de: ' + aumento2)
}
else{
    console.log ('El sueldo a cobrar es de: ' + sueldoOperario)
}

// ejercicio nota de alumnos

let note1 = 7 //parseInt(prompt('Ingrese el valor de la primer nota: '));
let note2 = 7 //parseInt(prompt('Ingrese el valor de la segunda nota: '));
let note3 = 8 //parseInt(prompt('Ingrese el valor de la tercer nota: '));

/*
let addNotes = note1 + note2 + note3;

if (addNotes / 3 >=7){
    console.log ('Promocionado')
}
else {
    console.log ('No promocionado')
}
*/

let gradeA = getNumberFromPrompt("Nota 1", 1)
let gradeB = getNumberFromPrompt("Nota 2", 1)
let gradeC = getNumberFromPrompt("Nota 3", 1)

const thresholedForPromotion = 7

var result = getAverage(gradeA, gradeB, gradeC)

if (result>=thresholedForPromotion) console.log('Promovido')


function getAverage(gradeA,gradeB,gradeC){
    return getTotal(gradeA,gradeB,gradeC) / 3;
}

function getTotal(gradeA,gradeB,gradeC){
    return gradeA + gradeB + gradeC
}

function getNumberFromPrompt(text,defaultValue){
    return parseInt(prompt(text, defaultValue))
}


// ejercicio comparar claves

do{
    var password = 'hola' //prompt('Ingrese su contraseña: ')
    var confirmPassword = 'hola' //prompt('Repita su contraseña: ')

    if (password == confirmPassword){
        console.log ('Acceso concedido')
    }
    else{
        console.log ('Acceso denegado')
    }
} while (password != confirmPassword) //se escribe VAR ya que es global sino LET no lo lee porque es local y no global


// ejercicio dos numeros un resultado

let firstNumber = 10; //parseInt(prompt('Ingrese el primer valor numérico: '));
let secondNumber = 41; //parseInt(prompt('Ingrese el segundo valor numérico: '));

if (firstNumber > secondNumber){
    let suma = firstNumber + secondNumber;
    let resta = firstNumber - secondNumber;
    console.log ('La suma es: ' + suma)
    console.log ('La resta es: ' + resta)
}
else if (firstNumber < secondNumber){
    let multiplicar = firstNumber * secondNumber;
    let division = firstNumber / secondNumber;
    console.log ('La multiplicación es: ' + multiplicar)
    console.log ('La división es: ' + division)
}
else{
    console.log ('Los números son iguales y no hacemos cuentas XD')
}

// ejercicio ¿uno o dos digitos?

let numberPositive = 14; //parseInt(prompt('Ingrese un valor numérico positivo de uno o dos dígitos: '))

if (numberPositive > 0 && numberPositive < 10){
    console.log ('El número ingresado es de un sólo dígito')
}
else if (numberPositive >= 10 && numberPositive < 100){
    console.log ('El número ingresado es de dos dígitos')
}
else {
    console.log ('Por favor, ingrese un número válido')
}

// ejercicio ¿cual es mayor?

let numA = 15; //parseInt(prompt('Ingrese un valor numérico'));
let numB = 29; //parseInt(prompt('Ingrese un valor numérico'));
let numC = 47; //parseInt(prompt('Ingrese un valor numérico'));

console.log ([numA,numB,numC].sort(a,b => b-a)[0])

// ejercicio positivos siempre!!

let valorEntero = 1; //parseInt(prompt('Ingrese un valor entero: '))

if (valorEntero > 0){
    console.log ('El valor ingresado es positivo')
}
else if (valorEntero == 0){
    console.log ('El valor ingresado es cero')
}
else{
    console.log ('El valor ingresado es negativo')
}

// ejercicio cuantos digitos?

let numberPositiveEnter = 105; //parseInt(prompt('Ingrese un valor entero positivo'))

if (numberPositiveEnter < 10){
    console.log ('El valor tiene una sola cifra')
}
else if (numberPositiveEnter >=10 && numberPositiveEnter < 100){
    console.log ('El valor tiene dos cifras')
}
else{
    console.log ('El valor tiene tres cifras')
}

// ejercicio test de capacitacion

let name = 'Mathias' //prompt('Ingrese su nombre')
let questions = 50; //parseFloat(prompt('Cantidad de preguntas realizadas'))
let correctQuestions = 19; //parseFloat(prompt('Cantidad de preguntas contestadas correctamente'))
let porcentaje = correctQuestions / questions;

if (porcentaje >= 0.9){
    console.log (name + ' obtuvo nivel superior')
    //let elemento = document.getElementById("mensaje"); // obtiene por ID 
    //elemento.innerHTML = name + ' obtuvo nivel superior'; // escribe en la pantalla
}
else if (porcentaje >= 0.75){
    console.log (name + ' obtuvo nivel medio')
    //let elemento = document.getElementById("mensaje"); // obtiene por ID 
    //elemento.innerHTML = name + ' obtuvo nivel medio'; // escribe en la pantalla
}
else if (porcentaje >= 0.5){
    console.log (name + ' obtuvo nivel regular')
    //let elemento = document.getElementById("mensaje"); // obtiene por ID 
    //elemento.innerHTML = name + ' obtuvo nivel regular'; // escribe en la pantalla
}
else {
    console.log (name + ' quedó fuera de rango')
    //let elemento = document.getElementById("mensaje"); // obtiene por ID 
    //elemento.innerHTML = name + ' quedó fuera de rango'; // escribe en la pantalla
}

// ejercicio menor que diez

let variableA = 15; //parseInt(prompt('Ingrese un valor numérico'))
let variableB = 9; //parseInt(prompt('Ingrese un valor numérico'))
let variableC = 47; //parseInt(prompt('Ingrese un valor numérico'))

if (variableA < 10 || variableB < 10 || variableC < 10){
    console.log ('Alguno de los números ingresados es menor a diez')
}
else{
    console.log ('Ninguno de los números es menor a diez')
}

// ejercicio mayor numero

let numX = 79; //parseInt(prompt('Ingrese un número'))
let numY = 80; //parseInt(prompt('Ingrese un número'))

if (numX > numY){
    console.log (numX + 'es el mayor')
}
else if (numY > numX){
    console.log (numy + 'es el mayor')
}
else {
    console.log ('son iguales')
}

// ejercicio area de una caja

let side;
let width;
let heigth;

console.log (side * width * heigth);

// ejercicio maquina expendedora

