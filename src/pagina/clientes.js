import IMask from '/node_modules/imask/esm/index.js';
import { criaCliente } from "../modelo.js";
import { salvaCliente } from '../api.js';

const buscar = document.querySelector('#buscarCEP');
const enviar = document.querySelector('#formulario-cliente');

const nome = document.querySelector('#nomeCliente');
const sobrenome = document.querySelector('#sobrenomeCliente');
const cpf = IMask(document.querySelector('#cpfCliente'), {
    mask: '000.000.000-00'
});
const telefone = IMask(document.querySelector('#telefoneCliente'), {
    mask: [
        { mask: '(00) 0000-0000' },
        { mask: '(00) 00000-0000' }
    ]
});
const email = document.querySelector('#emailCliente');
let cep = IMask(document.querySelector('#cepCliente'), {
    mask: '00000-000'
});

const msgAlerta = document.querySelector('#msgAlerta')

const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');
const complemento = document.querySelector('#complemento');
const logradouro = document.querySelector('#logradouro');
const numero = document.querySelector('#numero');

// ============================= Função get do viacep =============================
async function consultaEndereco() {
    let cep = document.querySelector('#cepCliente').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let req = await fetch(url);
    let data = await req.json();
    completaEndereco(data)
    return data
}

// ============================= Reseta os inputs do HTML =============================
function reseta() {
    nome.value = '';
    sobrenome.value = '';
    cpf.value = '';
    telefone.value = '';
    email.value = '';
    cep.value = '';

    estado.value = '';
    cidade.value = '';
    bairro.value = '';
    complemento.value = '';
    logradouro.value = '';
    numero.value = '';
    nome.focus();
}

// ============================= Completa os inputs com as informações da API viacep =============================
function completaEndereco(dados) {
    estado.value = dados.uf;
    cidade.value = dados.localidade;
    bairro.value = dados.bairro;
    complemento.value = dados.complemento;
    logradouro.value = dados.logradouro;

    numero.focus();
}

// ============================= realizar a busca pelo viacep =============================
buscar.addEventListener('click', (e) => {
    e.preventDefault();
    completaEndereco(consultaEndereco())
})

// ============================= Enviar as informações e salvar na API fake =============================
enviar.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validaCPF(cpf.value)) {
        const cliente = criaCliente(nome.value, sobrenome.value, cpf.value, telefone.value, email.value)
        salvaCliente(cliente)
        reseta();
    } else {
        msgAlerta.innerHTML = `<p class="alert alert-danger">Digite um CPF valido.</p>`
    }
})

// ============================= Função valida CPF =============================
function validaCPF(cpf) {
    let soma = 0
    let resto

    let strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(strCPF) !== -1)
        return false

    for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))
        resto = 0

    if (resto != parseInt(strCPF.substring(9, 10)))
        return false

    soma = 0

    for (let j = 1; j <= 10; j++)
        soma = soma + parseInt(strCPF.substring(j - 1, j)) * (12 - j)

    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))
        resto = 0

    if (resto != parseInt(strCPF.substring(10, 11)))
        return false

    return true
}