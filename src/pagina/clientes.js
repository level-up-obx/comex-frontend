import { criaCliente } from '../modelo.js'

let formClientes = document.querySelector('#formClientes')

formClientes.addEventListener('submit', function (event) {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let sobrenome = event.target.elements['sobrenome']
    let cpf = event.target.elements['cpf']
    let telefone = event.target.elements['telefone']

    let endereco = {
        rua: event.target.elements['logradouro'].value,
        numero: event.target.elements['numero'].value,
        bairro: event.target.elements['bairro'].value,
        cidade: event.target.elements['localidade'].value,
        estado: event.target.elements['uf'].value,
        cep: event.target.elements['cep'].value,
        complemento: event.target.elements['complemento'].value
    }

    let novoCliente = criaCliente(
        nome.value,
        sobrenome.value,
        cpf.value,
        telefone.value,
        endereco
    )

    console.log(novoCliente)
})
