import { criaCliente } from '../modelo.js'

const form = document.querySelector('#form')
const nome = document.querySelector('#nome')
const sobrenome = document.querySelector('#sobrenome')
const cpf = document.querySelector('#cpf')
const cep = document.querySelector('#cep')
const botaoCep = document.querySelector('#botao-cep')
const botaoForm = document.querySelector('#botao-form')
const rua = document.querySelector('#rua')
const cidade = document.querySelector('#cidade')
const uf = document.querySelector('#uf')
const bairro = document.querySelector('#bairro')

botaoCep.addEventListener('click', async () => {
    let url =  `https://viacep.com.br/ws/${cep.value}/json/`
    const apiFetch = await fetch(url)
    const response = await apiFetch.json()
    console.log(response)
    rua.value = response.logradouro
    cidade.value = response.localidade
    uf.value = response.uf
    bairro.value = response.bairro
})

function evento(e){
    e.preventDefault()
    console.log(criaCliente(nome.value, sobrenome.value, cpf.value, telefone.value, {rua: rua.value, cidade: cidade.value, uf: uf.value, bairro: bairro.value}))

    nome.value = sobrenome.value = cpf.value = telefone.value = cep.value = rua.value = cidade.value = uf.value = bairro.value = ''

    nome.focus()
}

form.addEventListener('submit', evento)
botaoForm.addEventListener('click' , evento)