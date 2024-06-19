var somapares = 0
var somaimpares = 0
var totalpares = 0
var totalimpares= 0

for(let i = 0; i <= 999; i++){
    if(i % 2 == 0){
        somapares += i
        totalpares++
        
    } else{
        somaimpares += i
        totalimpares++
    }
}

let mediapares = somapares / totalpares
let mediaimpares = somaimpares / totalimpares

console.log(`soma do numeros pares ${somapares}`)
console.log(`somo  do numeros imapres ${somaimpares}`)
console.log(`total de numeros pares ${totalpares}`)
console.log(`total de numeros impares ${totalimpares}`)
console.log(`media dos numeros pares ${mediapares}`)
console.log(`media dos numeros impares ${mediaimpares}`)

if (totalpares > totalimpares){
    console.log(`a total dos numeros pares é maior a dos numeros impares`)
} else if(totalimpares > totalpares){
    console.log(`o total dos numeros impares é maior dos numeros pares`)
}else {
    console.log('o total dos numeros pares é igual a dos numeros impares ')
}