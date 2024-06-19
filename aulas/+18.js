let nome
let idade

console.log("qual e o seu nome")
  process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('quantos anos vc tem?')
    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim() )
        processamento(nome, idade)
        process.exit()
    })
    
})
 function processamento(nome, idade){
 if(idade >= 18){
    console.log (`${nome}vc tem mais de 18 anos`)
 } else{
    idade = 18 - idade
    console.log(`${nome}, vc tem menos de 18 anos, você será maior de idade em ${idade} anos`)}
 } 