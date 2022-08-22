let list = [];
let negative = [];
let positive = [];
let mult15 = [];
let j = 0;
let totalPair = 0;

while (j < 10){
    let num = parseInt(prompt('Ingrese un valor'))
    list.push(num)
    j++
}

for (i=0; i<list.length; i++){
    let uni = list[i]
    if (uni < 0){
        negative.push(uni)
    }
    if (uni > 0){
        positive.push(uni)
    }
    if (uni%15==0){
        mult15.push(uni)
    }
    if (uni%2==0){
        totalPair += uni
    }
}

console.log (list)
console.log (negative)
console.log (positive)
console.log (mult15)
console.log (totalPair)