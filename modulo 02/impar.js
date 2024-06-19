let numero

  console.log("fale um numero")
  process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
  })
  function processamento(numero){
  if(numero == 0){ 
    console.log("o numero que vc digitou e zero")

  } else if(numero % 2 == 0){
    console.log("o numero e par")
  } else{
    console.log('o numero e impar')
   }
  }
  
    
