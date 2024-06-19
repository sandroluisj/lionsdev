let nome 
let idade
let aniversario
const anoAtual = 2024
let diferenca

console.log("qual e seu nome")
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log("qual e sua idade")

    process.stdin.once("data", function(data) {
        idade = parseInt(data.toString().trim())
        console.log("vc fez aniversario esse ano??")

        process.stdin.once('data', function(data){
            aniversario = data.toString().trim()
            processamento(nome, idade, aniversario)
            process.exit()
        })
       
    })
})
function processamento(nome, idade, aniversario) {
    diferenca = anoAtual - idade
         if(aniversario == "sim"){
            diferenca = diferenca
        }else {
            diferenca --
        }
        console.log(`olá ${nome}, voce tem ${idade} e vc nasceu no ano ${diferenca} `)
} 