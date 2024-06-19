
    let caracteres = 'AsNd15aGW71lvhrfoew'
    let senha = ''
    let comprimentoSenha = ''
    let numero
        console.log("Qual o comprimento da senha desejada?")
        process.stdin.once('data', function (data) {
            comprimentoSenha = parseInt(data.toString().trim())
            processamento(comprimentoSenha)
            process.exit()
        })
    
        function processamento(comprimentoSenha) {
        for(let i = 0; i < comprimentoSenha; i++) {
            numero =Math.floor(Math.random() * caracteres.length + 1)
        senha += caracteres.charAt(numero)
        
    } console.log (senha)
        }