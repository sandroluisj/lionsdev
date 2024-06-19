let numero

console.log("escolha uma tabuada?");
process.stdin.once('data', function (data) {
    numero = parseFloat(data.toString().trim())
     processamento(numero);
     process.exit()
})
  function processamento(numero){
    for(let i = 0; i <= 100; i++)
    {console.log(`
${numero} x ${i} = ${numero * i}`)}
    }