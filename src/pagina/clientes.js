import { criaCliente } from '../modelo.js'

let formClientes = document.querySelector('#formClientes')

let maskTelefone = IMask( document.getElementById('telefone'), { mask: '(00)00000-0000' })
let maskCpf = IMask( document.getElementById('cpf'), { mask: '000.000.000-00' })
let maskCep = IMask( document.getElementById('cep'), { mask: '00000-000' })
let inputCep = document.getElementById("cep");

formClientes.addEventListener('submit', function (event) {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let sobrenome = event.target.elements['sobrenome']
    let cpf = maskCpf.unmaskedValue
    let telefone = maskTelefone.unmaskedValue

    let endereco = {
        rua: event.target.elements['logradouro'].value,
        numero: event.target.elements['numero'].value  || null,
        bairro: event.target.elements['bairro'].value,
        cidade: event.target.elements['localidade'].value,
        estado: event.target.elements['uf'].value,
        cep: event.target.elements['cep'].value,
        complemento: event.target.elements['complemento'].value || null
    }

    let novoCliente = criaCliente(
        nome.value,
        sobrenome.value,
        cpf,
        telefone,
        endereco
    )

    fetch('http://localhost:3000/clientes', {
            method: 'POST', // or 'PUT'
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoCliente),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(`${data.nome}(CPF: ${data.cpf}) cadastrada com sucesso.`);
        })
        .catch((error) => {
            console.error('Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.');
        });

    console.log(novoCliente)
})

async function searchAddress() {
    try {
        const url = `https://viacep.com.br/ws/${maskCep.unmaskedValue}/json/`;

        const options = {
            method: 'GET',
            mode: 'cors',
            headers: { 'content-type': 'application/json;charset=utf-8'}
        }

        const response = await fetch(url, options);
        const data = await response.json();
        if (data.error) { throw new Error("Cep inválido!") }

        return data

      } catch (error) {
            console.log('Erro do ao tentar buscar o cep.');
            throw error
      }
}

inputCep.onblur = async function(){
        try {
            let enderecoViaCep = await searchAddress()

            if (enderecoViaCep) {
                document.getElementById('logradouro').value = enderecoViaCep.logradouro
                document.getElementById('complemento').value = enderecoViaCep.complemento
                document.getElementById('uf').value = enderecoViaCep.uf
                document.getElementById('bairro').value = enderecoViaCep.bairro
                document.getElementById('localidade').value = enderecoViaCep.localidade
                // console.log(enderecoViaCep)
            }
        } catch (err) {
            console.log(err)
        }
}

