import { Cliente } from '../typescript/modelo.js'
import { apiPost } from '../typescript/api.js'
import CPFValido from '../typescript/valida-cpf.js'
import IMask from 'imask';

const form: HTMLFormElement = document.querySelector('#form')
const nome: HTMLInputElement = document.querySelector('#nome')
const sobrenome: HTMLInputElement = document.querySelector('#sobrenome')
const email: HTMLInputElement = document.querySelector('#email')
const cpf: HTMLInputElement = document.querySelector('#cpf')
const telefone: HTMLInputElement = document.querySelector('#telefone')
const cep: HTMLInputElement = document.querySelector('#cep')
const botaoCep: HTMLInputElement = document.querySelector('#botao-cep')
const rua: HTMLInputElement = document.querySelector('#rua')
const cidade: HTMLInputElement = document.querySelector('#cidade')
const uf: HTMLInputElement = document.querySelector('#uf')
const bairro: HTMLInputElement = document.querySelector('#bairro')
const erroCpf: Element = document.querySelector('.erro-cpf')
const endereco: Object = {
    rua: rua.value,
    cidade: cidade.value,
    uf: uf.value,
    bairro: bairro.value
}

function adicionaMascara(elemento:HTMLInputElement, tipoMascara: string) {
    const configuracaoMascara = {
        mask: tipoMascara
    }
    const mascara = IMask(elemento, configuracaoMascara)
}

function limpaCampos() {
    nome.value = sobrenome.value = cpf.value = telefone.value = cep.value = rua.value = cidade.value = uf.value = bairro.value = email.value = ''
}

async function apiViaCep() {
    let url =  `https://viacep.com.br/ws/${cep.value}/json/`
    const apiFetch = await fetch(url)
    const response = await apiFetch.json()
    bairro.focus()
    rua.value = response.logradouro
    cidade.value = response.localidade
    uf.value = response.uf
    bairro.value = response.bairro
}

cep.onblur = apiViaCep
botaoCep.onclick = apiViaCep

adicionaMascara(telefone, '+{55} (00) 0000-0000')
adicionaMascara(cpf, '000.000.000-00')
adicionaMascara(cep, '00000-000')

cpf.addEventListener('blur', () => {
    if(CPFValido(cpf)) erroCpf.innerHTML = '<p>CPF inválido</p>'
    else erroCpf.innerHTML = ''
})

form.addEventListener('submit', e => {
    e.preventDefault()
    apiPost('clientes', new Cliente(nome.value, sobrenome.value, cpf.value, telefone.value, endereco))
    console.log(endereco)
    limpaCampos()
    nome.focus()
})