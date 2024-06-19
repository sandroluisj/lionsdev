let resposta
let gostadecafe
 
console.log("vc gosta de cafe?")
  process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
  })
  function processamento(gostadecafe){
    if (resposta == "sim") {
        gostadecafe = true
    } else if(resposta == "não") {
        gostadecafe = false
    }
    if(gostadecafe == true){
        console.log("que bom que vc gosta de cafe")
    } else {
        console.log('aaa que chato')
    }
  
  }