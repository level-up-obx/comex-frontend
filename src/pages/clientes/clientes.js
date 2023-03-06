import { CriaCliente } from '../../modelo.ts';

let formClientes = document.querySelector('#formClientes')

let maskTelefone = IMask( document.getElementById('telefone'), { mask: '(00)00000-0000' })
let maskCpf = IMask( document.getElementById('cpf'), { mask: '000.000.000-00' })
let maskCep = IMask( document.getElementById('cep'), { mask: '00000-000' })
let inputCep = document.getElementById("cep");

function validarCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false; // CPF deve ter 11 dígitos

    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    let iguais = true;
    for (let i = 1; i < 11 && iguais; i++) {
      if (cpf[i] !== cpf[0]) iguais = false;
    }
    if (iguais) return false;

    // Calcula os dígitos verificadores
    let soma = 0;
    let resto;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  }

formClientes.addEventListener('submit', function (event) {
    event.preventDefault()

    let nome = event.target.elements['nome']
    let sobrenome = event.target.elements['sobrenome']
    let cpf = maskCpf.unmaskedValue
    let telefone = maskTelefone.unmaskedValue
    let email = event.target.elements['email']

    let endereco = {
        rua: event.target.elements['logradouro'].value,
        numero: event.target.elements['numero'].value  || null,
        bairro: event.target.elements['bairro'].value,
        cidade: event.target.elements['localidade'].value,
        estado: event.target.elements['uf'].value,
        cep: event.target.elements['cep'].value,
        complemento: event.target.elements['complemento'].value || null
    }

    let novoCliente = new CriaCliente(
        nome.value,
        sobrenome.value,
        cpf,
        telefone,
        endereco,
        email.value
    )

    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpf-error');

    if (!validarCpf(cpf)) {
        cpfError.style.display = 'block';
        cpfInput.classList.add('invalid');
    }  else {
        cpfError.style.display = 'none';
        cpfInput.classList.remove('invalid');

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
      }


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

