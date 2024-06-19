let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impare = []
 for(let i = 0; i <= 9; i ++){
    if(numero[i] % 2 != 0){
        impare.push(numero[i])
    } 
 }
 console.log(impare)