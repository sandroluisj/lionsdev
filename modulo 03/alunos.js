let turma = [9, 10, 3, 6, 7, 10, 3, 5, 6, 7]
let totalturma = 0
let somaTurma = 0
let notaalta = turma[0]
let notabaixa = turma[0]
let notasacima = [0]
let notasbaixo = [0]

// calcular media
for(let i = 0; i < turma.length; i++ ){
  
    somaTurma += turma[i]
}

media = somaTurma/turma.length
// nota mais alta e notas mais baixa
for(let i = 0; i < turma.length; i++ ){
    if(turma[i] > notaalta){
        notaalta = turma[i]
    }
    if (turma[i] < notabaixa){
        notabaixa = turma[i]
    }
}

console.log(`${notaalta}`)
console.log(`${notabaixa}`)
console.log(`${media}`)
// notas mais alta que a media 
for(let i = 0; i < turma.length; i++ ){
    if(turma[i] >= media){
        notasacima = notaalta + 1
    }

    
}
console.log(`${notasacima}`)
turma.push(14)
console.log(`${turma}`)
for(let i = 0; i < turma.length; i++ ){
if(turma[i]<=media){
    notasbaixo ++
}
}
console.log(`${notasbaixo}`)
