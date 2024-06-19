let media 
let nota1 
let nota2
 console.log('qual e asua nota??')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('qual e sua outra nota??');
 
     process.stdin.once('data', function(data) {
         nota2 = parseFloat(data.toString().trim())
         processamento(nota1, nota2)
         process.exit()
     })
  })
    function processamento(nota1, nota2){
    let media = (nota1 + nota2) /2
        if( media <= 7 ){
            console.log(`que pena ficou de recuperção com a nota ${media}`)
        } else{
            console.log(`que legal vc não ficou de recuperação com nota ${media}`)
        }
    }
