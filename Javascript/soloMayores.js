//SOLO LOS MAYORES
function solomay(array_1){
    let res=Array()         //EL ARRAY CON LOS MAYORES AL PRIMERO
    for(i=1;i<array_1.length-1;i++){
        if (array_1[i]>array_1[0]){
        res.push(array_1[i])           //LO MANDO AL ARRAY CON LOS QUE CUMPLEN LA CONDICION
        }
        
    }
    return console.log(res)

} 
let value=0
const centinela="@"
let array_1=[]
while (value!=centinela){
    value=(prompt("ingrese un valor para el arreglo distinto de "+centinela)) 
    array_1.push(value)
    
}

//let array_1=[1,2,3]
console.log(array_1-1)
solomay(array_1)
