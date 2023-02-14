import { criaCliente } from "../modelo.js";

const clienteBtn = document.querySelector('.cliente__btn')
const cepBtn = document.querySelector('.cliente__input-cep-btn')

const logradouro = document.querySelector('#logradouro')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const numero = document.querySelector('#numero')

clienteBtn.onclick = () => {  
  const nome = document.querySelector('#nome')
  const sobrenome = document.querySelector('#sobrenome')
  const cpf = document.querySelector('#cpf')
  const telefone = document.querySelector('#telefone')

  if (!nome.value || !sobrenome.value || !cpf.value || !logradouro.value || !bairro.value || !cidade.value || !numero.value) {
    alert("Preencha todos os campor antes de enviar.")
    return
  }
  
  const endereco = {
    logradouro :logradouro.value,
    bairro: bairro.value,
    cidade: cidade.value,
    numero: numero.value
  }
  
  console.log(criaCliente(nome.value, sobrenome.value, cpf.value, telefone.value, endereco))
  
  nome.value = sobrenome.value = cpf.value = telefone.value = logradouro.value = bairro.value = cidade.value = numero.value = ''
  
  nome.focus()
}

cepBtn.onclick = async (e) => {
  e.preventDefault()
  const cep = document.querySelector('#cep')
  const resp = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
  const endereco = await resp.json()

  cep.value = ''

  logradouro.value = endereco.logradouro
  bairro.value = endereco.bairro
  cidade.value = endereco.localidade

  numero.focus()
}