import { criaCliente } from "../modelo.js";
import IMask from '/node_modules/imask/esm/index.js';

const nome = document.querySelector('#nomeCliente');
const sobrenome = document.querySelector('#sobrenomeCliente');

const cpf = IMask(document.querySelector('#cpfCliente'), {
    mask: '000.000.000-00'
});
const telefone = IMask(document.querySelector('#telefoneCliente'), {
    mask: [
        { mask: '(00) 00000-0000' },
        { mask: '(00) 0000-0000' }
    ]
});

const email = document.querySelector('#emailCliente');

let cep = IMask(document.querySelector('#cepCliente'), {
    mask: '00000-000'
});

const buscar = document.querySelector('#buscarCliente');
const enviar = document.querySelector('#enviarCliente');

const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidade');
const bairro = document.querySelector('#bairro');
const complemento = document.querySelector('#complemento');
const numero = document.querySelector('#numero');

async function consultaEndereco() {
    let cep = document.querySelector('#cepCliente').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let req = await fetch(url);
    let data = await req.json();
    completaEndereco(data)
    return data
}

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
    numero.value = '';
    nome.focus();
}

function salvarCliente() {
    let dadosCep = {
        estado: estado.value,
        cidade: cidade.value,
        bairro: bairro.value,
        complemento: complemento.value,
        numero: numero.value
    }
    let imprimeCliente = criaCliente(nome.value, sobrenome.value, cpf.value, telefone.value, email.value, dadosCep);
    console.log(imprimeCliente);
}

function completaEndereco(dados) {
    estado.value = dados.uf;
    cidade.value = dados.localidade;
    bairro.value = dados.bairro;
    complemento.value = dados.complemento;
    numero.focus();
}

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    completaEndereco(consultaEndereco())
})

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    salvarCliente();
    reseta();
})

