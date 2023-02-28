import { criaCliente } from '../modelo.js'
import { apiPost } from '../consumoApi.js'
import CPFValido from '../valida-cpf.js'

const form = document.querySelector('#form')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const telefone = document.querySelector('#telefone')
const cep = document.querySelector('#cep')
const botaoCep = document.querySelector('#botao-cep')
const rua = document.querySelector('#rua')
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')
const bairro = document.querySelector('#bairro')
const erroCpf = document.querySelector('.erro-cpf')
const endereco = {
    rua: rua.value,
    cidade: cidade.value,
    uf: uf.value,
    bairro: bairro.value
}

function adicionaMascara(elemento, tipoMascara) {
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
    apiPost('clientes', criaCliente(nome.value, sobrenome.value, cpf.value, telefone.value, endereco))
    limpaCampos()
    nome.focus()
})