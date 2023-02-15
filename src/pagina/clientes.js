import { criaCliente } from '../modelo.js'

let formClientes = document.querySelector('#formClientes')

formClientes.addEventListener('submit', function (event) {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let sobrenome = event.target.elements['sobrenome']
    let cpf = event.target.elements['cpf']
    let telefone = event.target.elements['telefone']
    let endereco = event.target.elements['endereco']

    let novoCliente = criaCliente(
        nome.value,
        sobrenome,
        cpf.value,
        telefone.value,
        endereco.value
    )

    console.log(novoCliente)
})
