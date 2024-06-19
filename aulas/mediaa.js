let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let notamaxima = notas[0]
let notaminima = notas[0]
let acimadamedia = 0
let reprovado = 0


for(let i = 0; i < notas.length; i++){
    soma += notas[i]
    
} 
// A
media = soma / notas.length 
console.log(`${media}`)
//B
for(let i = 0; i < notas.length; i++){
if(notas[i] < notamaxima){
    notamaxima = notas[i]
} else if(notas[i] > notaminima){
    notaminima = notas[i]
}
}
console.log(`${notamaxima} e ${notaminima}`)
//C
for(let i = 0; i < notas.length; i++ ){
    if(notas[i] > media){
    acimadamedia ++
    }

    
}
console.log(`${acimadamedia}`)
// d 
notas.push(8)
console.log(`${notas}`)
// e 
for(let i = 0; i < notas.length; i++ ){
if(notas[i] < 6){   
    reprovado ++
} 
}
console.log(`${reprovado}`)