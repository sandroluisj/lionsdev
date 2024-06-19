let numero = [12, 34, 55, 20, 60, 9, 5, 7, 11]
let impares = []
let pares = []
numero.push(18)
for(let i = 0; i <= 9; i ++){
    if(numero[i] % 2 != 0){
        impares.push(numero[i])
    } 
 }
 console.log(`${impares}`)
 for(let i = 0; i <= 9; i ++){
    if(numero[i] % 2 == 0){
        pares.push(numero[i])
    } 
 }
 console.log(`${pares}`)