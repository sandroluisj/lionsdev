const readline = require('readline')


const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let maiorsalario 
exibirMenu()



	function exibirMenu() {
        console.log(`
        Menu:
        1. Cadastrar funcionário
        2. Listar todos os funcionários
        3. Exibir funcionário com maior salário
        4. remova funcionario
        5. edição funcionario
        6. sair
        
        `)
        rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
        case '1':
            cadastrarFuncionario()
        break
        case '2':
            listarFuncionarios()
        break
        case '3':
            exibirMaiorSalario()
        break
        case '4':
            removafuncionario()
        break
        case '5':
            edicacaofuncinario()
        break
        case '6':
        rl.close()
        break
        default:
        console.log('Opção inválida, tente novamente.')
        exibirMenu()
        break
        }
        })
        }
    

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario)})
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}
function listarFuncionarios() {
    if(funcionarios.length == 0 ) {
        console.log('nao tem nenhum funcionario cadastrado')
        exibirMenu()
    } else {
   console.log(funcionarios)
   exibirMenu()
    }
}

function exibirMaiorSalario(){
    maiorsalario = funcionarios[0]
    for(let i = 0; i < funcionarios.length; i++){
        if(funcionarios[i].salario > maiorsalario.salario){
            maiorsalario = funcionarios[i]
        }
    }
console.log(maiorsalario)
exibirMenu()
}

function removafuncionario(){
    if (funcionarios.length == 0) {
        console.log('nada cadastrado.')
        exibirMenu()
        } else {
        console.log('Lista de funcionários: ')
        funcionarios.forEach((funcionario, index) => {
        console.log(`${index + 1}. nome:${funcionario.nome}`)
        })
        rl.question('Digite o número do elemento que deseja remover:', (opcao) => {
        if (opcao > 0 && opcao <= funcionarios.length) {
        funcionarios.splice(opcao - 1, 1)
        console.log('elemento removido com sucesso!')
        exibirMenu()
        } else {
        console.log('numero inválido, tente novamente.')
        exibirMenu()
        }
    }
)}   
}
function edicacaofuncinario(){
    if (funcionarios.length == 0) {
        console.log('Nada cadastrado.')
        exibirMenu()
    }else {
        console.log('Lista de elementos')
    funcionarios.forEach((funcionario, index) => {
    console.log(`${index + 1}. nome:${funcionario.nome}`)
    })
    rl.question('Digite o número do elemento que deseja editar: ', (opcao) => {
    if (opcao > 0 && opcao <= funcionarios.length) {
    rl.question('Digite a novo nome: ', (nome) => {
    rl.question('Digite a nova cargo ', (cargo) => {
        rl.question('Digite a novo salario ', (salario) => {
        funcionarios[opcao - 1] = {
         nome,
         cargo,
         salario
        }
        console.log('editado com sucesso!')
        exibirMenu()
        })
        })
        })
        } else {
        console.log('Número inválido, tente novamente.')
        exibirMenu()
        }
        })
        
        }
        }
