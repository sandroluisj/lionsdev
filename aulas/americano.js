let numero
let classificação
console.log("qual e a sua nota?")
process.stdin.once('data', function(data){
    numero = parseFloat(data.toString().trim())
    classificação = processamento(numero)
    if( classificação == "A"||classificação == "B"||classificação == "C"){
        console.log(`que legal vc não ficou de recuperação com nota ${classificação}`)
    } else if(classificação == "D"||classificação == "E"){
        console.log(`que pena ficou de recuperação com a nota ${classificação}`)
    
}
process.exit()
})
 function processamento(numero){
 switch(true){
    case (numero >= 90 && numero <= 100 ):
    return'A'
    case (numero >= 80 && numero <= 89):
   return'B'
   case (numero >= 70 && numero <= 79 ):
    return'C'
    case (numero >= 60 && numero <= 69 ):
    return 'D'
    case (numero >= 0 && numero <= 59 ):
    return 'E'
    default:
        console.log('nota invalda')
    }
 }
