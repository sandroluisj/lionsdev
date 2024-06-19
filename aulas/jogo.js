const readline = require('readline')
let aleatorio = Math.floor(Math.random() * 100)+ 1 
let pessoas = []

console.log("boas vindas")
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

function perguntarContinuacao() {
rl.question('Digite um Número ', (aleatorio) => {
console.log(`Você digitou: ${aleatorio}`)


if(numero != aleatorio){
    console.log('Você acertou')
pessoas.push(resposta)
} else if (resposta > aleatorio) {
    console.log(' o numero é muito alto')
} else {
    console.log("o numero é muito baixo")}
}
perguntarContinuacao() 
}else {
console.log('Voce Acertou .Programa encerrado.')
console.log(pessoas.length +1)
rl.close()
}
})
}


perguntarContinuacao()