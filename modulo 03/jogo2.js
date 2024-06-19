const readline = require('readline')
let numero = Math.floor(Math.random() * 100)+ 1 
let pessoas = []
let max = 5

console.log('boas vindas!')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function perguntarContinuacao() {
rl.question('Digite um Número ', (resposta) => {
console.log(`Você digitou: ${resposta}`)

if (resposta != numero) {
console.log('Número errado.')
pessoas.push(resposta)
    if(resposta > numero){
        console.log('O numero é menor')
    }else{
        console.log('O numero é maior')
    }
perguntarContinuacao()
} else  {
console.log('Voce Acertou.')
console.log(`O progama rodou ${pessoas.length +1} vezes.`)
rl.close()

}

if(pessoa >= max ){
    console.log('Você atingiu o número máximo de tentativas :(')}
})
} 

perguntarContinuacao()