let numero = 0
console.log("fale uma numero ")
process.stdin.once('data', function (data) {
    numero = parseFloat(data.toString(). trim())
    N5(numero)
    process.exit()
})
function N5(numero){
    if(numero % 5 == 0){
        console.log('ele e divisivel por 5')
    }
    else (
        console.log('ele nao e divisivel por 5')
    )
}
