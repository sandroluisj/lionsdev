let nome 
let idade
const anoAtual = 2024
console.log("qual e seu nome")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("qual e sua idade")

    process.stdin.once("data", function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
function processamento(nome, idade) {
        let diferença = anoAtual - idade
        console.log(`olá ${nome}, voce tem ${idade -1} e vc nasceu no ano ${diferença}`) 
        

}