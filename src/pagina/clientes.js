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

async function searchAddress(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`

    let response = await fetch(url)
    return await response.json()
}

let inputCpf = document.getElementById("cep");

inputCpf.onblur = async function(event){
    let enderecoViaCep = await searchAddress(event.target.value)

    document.getElementById('logradouro').value = enderecoViaCep.logradouro
    document.getElementById('complemento').value = enderecoViaCep.complemento
    document.getElementById('uf').value = enderecoViaCep.uf
    document.getElementById('bairro').value = enderecoViaCep.bairro
    document.getElementById('localidade').value = enderecoViaCep.localidade

    // console.log(enderecoViaCep)
}



