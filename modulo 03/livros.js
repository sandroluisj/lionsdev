const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let jogos = []
let jogomaiscaro 
exibirMenu()

function exibirMenu(){
    console.log(`
    menu:
    1. casdastrar o jogo
    2. listar jogos
    3. exibir o jogo mais caro
    4. remova jogo
    5. edição do jogo
    6. sair`)

        rl.question('escolha umas das opções:', (numero)=>{
            switch(numero){
                case'1':
                Cadastrar()
                break
                case'2':
                listar()
                break
                case'3':
                valor()
                break
                case'4':
                remova()
                break
                case'5':
                editar()
                break
                case'6':
                rl.close()
                break
                default:
                    console.log('erro')
                    exibirMenu()
                    break
            }
        })
    }
    function Cadastrar(){
        rl.question('Digite o nome do jogo ', (nome) => {
			
            rl.question('Digite o valor do jogo ', (salario) => {
				funcionarios.push({ nome: nome, personagem: personagem,  salario: parseFloat(salario)})
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
            })
        }
	

    function listar(){
        if(jogos.length == 0 ){
            console.log('nao tem nenhum jogo')
            exibirMenu()
        } else{
            console.log(jogo)
            exibirMenu()
        }

    }
    function valor(){
        jogomaiscaro = jogos[0]
        for(let i = 0; i < jogo,length; i++){
            if(jogos[i].valor > jogomaiscaro.valor){
             jogomaiscaro = jogos[i] }
            }
    
    console.log(jogomaiscaro)
    exibirMenu()
    }
function remova(){
    if(jogos.length == 0 ){
        console.log('nao tem nenhum jogo cadastrado')
        exibirMenu()
        } else{
            console.log('lista de jogo:')
            jogos.forEach((jogo, index) =>{
                console(`${index + 1}. jogo:${jogo.nome}`)
            })
            rl.question('digiten o numero que deja remover', (opcao) =>{ 
            if(opcao > 0 && opcao <= jogos.length){
                jogos.splice(opcao - 1, 1)
                console.log('jogo removido')
                exibirMenu()
            } else{
                console.log('erro')
                exibirMenu()
            }
        }
    )}
}
function editar(){
if(jogos.length == 0 ){
    console.log('nao tem nenhum jogo cadastrado')
    exibirMenu()
    } else{
        console.log('lista de jogo:')
        jogos.forEach((jogo, index) =>{
            console(`${index + 1}. jogo:${jogo.nome}`)
        })
        rl.question('Digite o número do elemento que deseja editar: ', (opcao) => {
            if (opcao > 0 && opcao <= jogo.length) {
            rl.question('Digite a novo nome: ', (nome) => {
                rl.question('Digite a novo salario ', (valor) => {
                funcionarios[opcao - 1] = {
                 nome,
                valor
                }
                console.log('editado com sucesso!')
                exibirMenu()
                })
                })
                }else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
    }
    })
            }
        }
            
                
                
                
    
