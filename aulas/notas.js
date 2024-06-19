let nota1
let nota2 
let media = []
 console.log ('qual sua nota');
 process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
   console.log('qual e sua outra nota');

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit()
    })
 })
 function processamento(nota1, nota2) { 
   media.push(nota1, nota2)
    let calculo = (media[0] + media[1]) /2
    console.log(`a sua media  e ${calculo}`)
 }