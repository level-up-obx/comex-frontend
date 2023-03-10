import IMask from 'imask';
import { Cliente, Endereco } from "../../ts/modelo-classes.js";
import { consultaEndereco, salvaCliente } from '../../ts/api.js';

let nome: HTMLInputElement = <HTMLInputElement>document.querySelector('#nomeCliente');
let sobrenome: HTMLInputElement = <HTMLInputElement>document.querySelector('#sobrenomeCliente');
let email: HTMLInputElement = <HTMLInputElement>document.querySelector('#emailCliente');

let campoCpf: HTMLInputElement = document.querySelector('#cpfCliente');
let cpf = IMask(campoCpf, {
    mask: '000.000.000-00'
});

let campoTelefone: HTMLInputElement = document.querySelector('#telefoneCliente');
let telefone = IMask(campoTelefone, {
    mask: [
        { mask: '(00) 0000-0000' },
        { mask: '(00) 00000-0000' }
    ]
});

let campoCep: HTMLInputElement = document.querySelector('#cepCliente');
let cep = IMask(campoCep, {
    mask: '00000-000'
});

let msgAlerta: HTMLElement = <HTMLElement>document.querySelector('#msgAlerta');

let estado: HTMLInputElement = <HTMLInputElement>document.querySelector('#estado');
let cidade: HTMLInputElement = <HTMLInputElement>document.querySelector('#cidade');
let bairro: HTMLInputElement = <HTMLInputElement>document.querySelector('#bairro');
let complemento: HTMLInputElement = <HTMLInputElement>document.querySelector('#complemento');
let logradouro: HTMLInputElement = <HTMLInputElement>document.querySelector('#logradouro');
let numero: HTMLInputElement = <HTMLInputElement>document.querySelector('#numero');

function salvarCliente(): void {
    let endereco = new Endereco(
        cep.value,
        cidade.value,
        bairro.value,
        logradouro.value,
        estado.value,
        numero.value,
        complemento.value
    );

    let cliente = new Cliente(
        nome.value,
        sobrenome.value,
        cpf.value,
        telefone.value,
        email.value,
        endereco
    );

    salvaCliente(cliente);
    reseta();
}

let formulario: HTMLFormElement = <HTMLFormElement>document.querySelector('#formulario-cliente');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    if (validaCPF(cpf.value)) {
        salvarCliente();
    } else {
        msgAlerta.innerHTML = `<p class="alert alert-danger">Digite um CPF valido.</p>`;
    }
});

let buscar: HTMLElement = <HTMLElement>document.querySelector('#buscarCEP');
buscar.addEventListener('click', (e) => {
    e.preventDefault();

    buscarEndereco();
})

async function buscarEndereco(): Promise<any> {
    let endereco = new Endereco(
        cep.value,
        cidade.value,
        bairro.value,
        logradouro.value,
        estado.value,
        numero.value,
        complemento.value
    );
    let buscandoEndereco = await consultaEndereco(endereco.cep);
    completaEndereco(buscandoEndereco);
}

function completaEndereco(dados: any): void {
    estado.value = dados.uf;
    cidade.value = dados.localidade;
    bairro.value = dados.bairro;
    complemento.value = dados.complemento;
    logradouro.value = dados.logradouro;

    numero.focus();
}

function reseta(): void {
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

function validaCPF(cpf: string): boolean {
    let soma: number = 0;
    let resto: number;

    let strCPF: string = String(cpf).replace(/[^\d]/g, '');

    if (strCPF.length !== 11)
        return false;

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

    resto = (soma * 10) % 11;

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

    return true;
}