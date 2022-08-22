let notes = [4,8,6,5,10,2,7,5,9,3];
let bestNotes = 0;
let worstNotes = 0;

for (let i=0; i<notes.length; i++){
    if (notes[i]>= 7){
        bestNotes++;
    }
    else{
        worstNotes++;
    }
}

console.log ('Notas mayores o iguales a 7: ' + bestNotes)
console.log ('Notas mayores o iguales a 7: ' + worstNotes)