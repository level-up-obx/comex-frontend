// import { criaCliente } from "../modelo.js";
import { Cliente } from '../models/clientes.js'
import { Endereco } from '../models/endereco.js'


const clienteBtn = document.querySelector('.cliente__btn') as HTMLButtonElement
const cepBtn = document.querySelector('.cliente__input-cep-btn') as HTMLButtonElement

const logradouro = document.querySelector('#logradouro') as HTMLInputElement
const bairro = document.querySelector('#bairro') as HTMLInputElement
const cidade = document.querySelector('#cidade') as HTMLInputElement
const numero = document.querySelector('#numero') as HTMLInputElement

const nome = document.querySelector('#nome') as HTMLInputElement
const sobrenome = document.querySelector('#sobrenome') as HTMLInputElement
const cpf = document.querySelector('#cpf') as HTMLInputElement
const telefone = document.querySelector('#telefone') as HTMLInputElement

const cep = document.querySelector('#cep') as HTMLInputElement

document.querySelectorAll('.validate').forEach(i => {
  i.addEventListener('blur', e => inputValidate(e.target))
})

let inputsNotEmpty = true
let inputsLengthOk = true
let inputCpfOk = true
let inputTelefoneOk = true

function inputValidate(input: any) {
  const errorElement = input.parentElement.querySelector('.cliente__error') as HTMLElement
  if (!input.validity.valid) {
    if (input.validity.valueMissing) {
      errorElement.innerText = 'Campo obrigatório.'
      inputsNotEmpty = false
    }
    if(input.validity.tooShort) {
      errorElement.innerText = 'Adicione pelo menos 2 caracteres'
      inputsLengthOk = false
    }
    errorElement.style.display = 'block'
  } else {
    errorElement.style.display = 'none'
    inputsNotEmpty = true
    inputsLengthOk = true
  }
}

cpf.addEventListener('blur', e => cpfValidation(e)) 

function cpfValidation(e: any) {
  const errorElement = e.target.parentElement.querySelector('.cliente__error')
  const cpfValue = e.target.value.replace(/\D+/g, '')
  
  // Verifica se tem 11 dígitos
  if(cpfValue.length != 11) {
    errorElement.innerText = 'O CPF deve ter 11 dígitos.'
    errorElement.style.display = 'block'
    inputCpfOk = false
    return
  }
  
  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpfValue)) {
    errorElement.innerText = 'CPF inválido.'
    errorElement.style.display = 'block'
    inputCpfOk = false
    return 
  }

// Primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += +cpfValue[i] * (10 - i)
  }
  let rest = 11 - (sum % 11)
  const verifierDigit1 = (rest > 9) ? 0 : rest
  if (verifierDigit1 !== +cpfValue[9]) {
    errorElement.innerText = 'CPF inválido.'
    errorElement.style.display = 'block'
    inputCpfOk = false
    return
  }

  // Segundo dígito verificador
  sum = 0;  
  for (let i = 0; i < 10; i++) {
    sum += +cpfValue[i] * (11 - i)
  }
  rest = 11 - (sum % 11);
  let verifierDigit2 = (rest > 9) ? 0 : rest
  if (verifierDigit2 !== +cpfValue[10]) {
    errorElement.innerText = 'CPF inválido.'
    errorElement.style.display = 'block'
    inputCpfOk = false
    return
  }

  errorElement.style.display = 'none'
  inputCpfOk = true
}

telefone.addEventListener('blur', e => telefoneValidation(e))

function telefoneValidation(e: any) {
  const errorElement = e.target.parentElement.querySelector('.cliente__error')

  if (e.target.value) {
    const telefoneValue = e.target.value.replace(/[^0-9]+/g, "")
    
    if (telefoneValue.length != 11) {
      errorElement.innerText = 'Telefone inválido'
      errorElement.style.display = 'block'
      inputTelefoneOk = false
      return
    }
    errorElement.style.display = 'none'
    inputTelefoneOk = true
  }
}


function formatCpf(cpf: string) {
  const firstPart = cpf.split('').splice(0, 3).join('')
  const secondPart = cpf.split('').splice(3, 3).join('')
  const thirdPart = cpf.split('').splice(6, 3).join('')
  const lastPart =  cpf.split('').splice(-2, 2).join('')
  
  return `${firstPart}.${secondPart}.${thirdPart}-${lastPart}`
}

function formatTelefone(telefone: string) {
  if (telefone) {
    const firstPart = telefone.split('').splice(0, 2).join('')
    const secondPart = telefone.split('').splice(2, 5).join('')
    const thirdPart = telefone.split('').splice(7, 4).join('')
  
    return `(${firstPart}) ${secondPart}-${thirdPart}`
  }
  return ``
}

clienteBtn.addEventListener('click', () => {
  if (!nome.value || !sobrenome.value || !cpf.value || !logradouro.value || !bairro.value || !cidade.value || !numero.value || !inputsNotEmpty || !inputsLengthOk || !inputCpfOk || !inputTelefoneOk) {
    alert("Preencha todos os campos corretamente antes de enviar.")
    return
  }
  
  // const endereco = {
  //   logradouro: logradouro.value,
  //   bairro: bairro.value,
  //   cidade: cidade.value,
  //   numero: numero.value
  // }

  const endereco = new Endereco(
    logradouro.value,
    bairro.value,
    cidade.value,
    numero.value
  ).criaEndereco()
  
  saveClient(endereco)
})

function saveClient(endereco: object) {
  clienteBtn.disabled = true
  fetch('http://localhost:3000/clientes', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(new Cliente(nome.value, sobrenome.value, formatCpf(cpf.value), formatTelefone(telefone.value), endereco).criaCliente())
  })
  .then(resp => {
    if (resp.status === 201) {
      alert(`Cliente ${nome.value} (${cpf.value}) cadastrado com sucesso.`)
      nome.value = sobrenome.value = cpf.value = telefone.value = logradouro.value = bairro.value = cidade.value = numero.value = ''
  
      nome.focus()
      clienteBtn.disabled = false
    }
  })
  .catch(err => {
    alert('Não foi possível cadastrar o cliente! Aguarde uns minutos e tente novamente.')
    console.log('fetchErr::', err)
    clienteBtn.disabled = false
  })
}

cepBtn.onclick = async (e) => {
  e.preventDefault()
  
  if (!cep.value) return

  const resp = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
  const endereco = await resp.json()

  cep.value = ''

  logradouro.value = endereco.logradouro
  bairro.value = endereco.bairro
  cidade.value = endereco.localidade

  numero.focus()
} 