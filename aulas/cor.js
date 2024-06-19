let coresfavoritas = ["preto", "verde", "azul"]
let coresespeciais = []
let cordousuario
console.log("fale uma cor ")
process.stdin.once('data', function (data) {
    cordousuario = (data.toString(). trim())
    processamento(cordousuario)
    process.exit()
})
 function processamento(cordousuario){
    if(coresfavoritas.includes(cordousuario)){
        console.log(`a cor ${cordousuario} esta nas cores favoristas da turma`)
    } else{
        console.log(`a cor ${cordousuario} não esta no banco de dados`)
    coresespeciais.push(cordousuario)
    }
    console.log(`a cor da sala e  ${coresfavoritas}`)
    console.log(`a cor tua favorita e ${cordousuario}`)
    console.log(`a cores especiais e ${coresespeciais}`)
    
    }
