// ejercicio 1

let number = 15

// let userInput = prompt ("Ingrese un número")
// let numberFromInput = parseIn(userInput)
// let number = parseInt(prompt("Ingrese un número"))

if (number % 3 == 0 && number % 5 == 0){
    console.log(number + " Es multiplo de 3 y de 5");
}
else if (number % 5 == 0){
    console.log(`${number} es multiplo de 5`)
}
else if (number % 3 == 0){
    console.log("Es multiplo de 3")
}
else{
    console.log("No es multiplo de 3 ni de 5")
}


// ejercicio 2

let a = 12
let b = 44
let c = 2

let discriminante = (b*b)-(4*a*c)
let raiz1;
let raiz2;

if (discriminante < 0){
    console.log("No tiene raíces")
}else if (discriminante == 0){
    console.log("Tiene una única raíz")
    raiz1 = -b/(2*a)
    console.log(raiz1)
}else{
    console.log("Tiene 2 raíces")
    raiz1 = (-b + Math.sqrt(discriminante)) / (2*a)
    raiz2 = (-b - Math.sqrt(discriminante)) / (2*a)
    console.log(raiz1, raiz2)
}

// ejercicio 3

let option = 'a'
switch (option){
    case 'a':
        console.log("El procedimiento 'a'")
        break;
    case 'b':
        console.log("El procedimiento 'b'")
        break;
    case 'c':
        console.log("El procedimiento 'c'")
        break;
    case 'd':
        console.log("Fin del programa")
        break;
    default:
        console.log("Ingrese un valor válido")            
        }

// ejercicio 4

let numberForExcercise4 = 116 // parseInt(prompt("Ingrese un número"))
let maxPosibleDivisible = numberForExcercise4 / 2
let divisibles = []

while (maxPosibleDivisible >= 0){
    if (numberForExcercise4 % maxPosibleDivisible == 0){
        divisibles = divisibles.concat(maxPosibleDivisible)
        //divisibles.push(maxPosibleDivisible);
    }
    maxPosibleDivisible--
    
}
console.log(divisibles)
