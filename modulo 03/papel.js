let opcoes = ['Pedra', 'Papel', 'Tesoura']
let computador = ''
let usuario = ''
let resultado = ''

    console.log('Escolha pedra, papel ou tesoura')
    process.stdin.once('data', function (data) {
        usuario = data.toString().trim()
        processamento(computador, usuario, resultado) 
        process.exit()
    })

        function processamento(computador, usuario, resultado) {
            computador = opcoes[Math.floor(Math.random() * opcoes.length)]
        console.log(`${computador}`)
            if(usuario == computador) {
                console.log("Empate!")
            }
            else if (usuario == opcoes[0] && computador == opcoes[2] || usuario == opcoes[2] && computador == opcoes[1] || usuario == opcoes[1] && computador == opcoes[0] ) {
                console.log("Você venceu!")
            }
            else {
                console.log("Você perdeu")
            }
            console.log(`${resultado}`)
        }