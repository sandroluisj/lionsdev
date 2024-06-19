let nome = '';
console.log('Qual nome de usario?')
process.stdin.on('data' , function(data) {
let nome = data.toString();
let saudacao = "ola," + nome 
console.log(saudacao)
})
