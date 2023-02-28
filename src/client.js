import { createClient } from "./modelo.js"

document.getElementById("btn_cep").onclick = searchAddress;
const form = document.getElementById("form_client")
const URL_API = 'http://localhost:3000'


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const client = createClient(form.client_name.value, form.client_cpf.value, form.client_birth_date.value,
        form.client_email.value, form.client_contact.value, form.client_cep.value, form.client_address.value,
        form.client_number.value, form.client_complement.value, form.client_district.value, form.client_city.value, form.client_state.value)

    const elements = form.getElementsByTagName("input")

    postClient(client)

    console.log(client)

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        element.value = ""

    }

    form.client_name.focus()


})

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validate(evento.target)
    })

})

function validate(input) {
    const typeInput = input.dataset.tipo


    if (validators[typeInput]) {
        validators[typeInput](input)
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove('input_container_invalid')

        input.parentElement.querySelector('.message_error').innerHTML = ''
    } else {
        input.parentElement.classList.add('input_container_invalid')
        
        input.parentElement.querySelector('.message_error').innerHTML = showErro(typeInput, input)

    }
}



const typeError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const message = {
    client_name: {
        valueMissing: 'Digite seu nome completo.',
        customError: 'O nome digitado deve ter pelo menos 2 caracteres.'
    },

    client_cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.'
    },

    client_email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido',
        customError: 'O email digitado não é válido.'
    },

    client_cep: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido.',
        customError: 'O CEP não foi encontrado.'
    },

    client_address: {
        valueMissing: 'O campo de logradouro não pode estar vazio.',
    },

    client_district: {
        valueMissing: 'O campo de cidade não pode estar vazio.',
    },

    client_city: {
        valueMissing: 'O campo de cidade não pode estar vazio.',
    },

    client_state: {
        valueMissing: 'O campo de estado não pode estar vazio.',
    },
}

function validateName(input) {
    let msg = ''

    if (!input.value || input.value.length < 3) {
        msg = 'O nome digitado deve ter pelo menos 2 caracteres.'
    }
    input.setCustomValidity(msg)
}

function validadeEmail(input) {
    let msg = ''
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!input.value || !re.test(input.value)) {
        msg = 'O email digitado não é válido'
    }
    input.setCustomValidity(msg)
}

form.client_contact.addEventListener("keyup", (evento) => {
    let input = evento.target
    input.value = phoneMask(input.value)
})


function phoneMask(value) {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

form.client_cep.addEventListener("keyup", (evento) => {
    let input = evento.target
    input.value = cepMask(input.value)
})

function cepMask(value) {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    value = value.replace(/(-\d{3})\d+?$/, '$1')
    return value
}

const validators = {
    client_name: input => validateName(input),
    client_cpf: input => validateCPF(input),
    client_email: input => validadeEmail(input),
    client_cpf: input => validateCPF(input)
}

function showErro(typeInput, input) {
    let msg = ''

    typeError.forEach(error => {
        if (input.validity[error])
            msg = message[typeInput][error]
    })
    return msg
}

async function searchAddress() {
    let cep = form.client_cep.value
    let errorMessage = document.getElementById('erro')
    errorMessage.innerHTML = ""
    try {
        let queryCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let queryCepJson = await queryCep.json()
        if (queryCepJson.erro) {
            throw Error('CEP inexistente!')
        }
        console.log(queryCepJson)
        form.client_address.value = queryCepJson.logradouro
        form.client_district.value = queryCepJson.bairro
        form.client_city.value = queryCepJson.localidade
        form.client_state.value = queryCepJson.uf

    } catch (erro) {
        errorMessage.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
    }
}

function postClient(client) {
    fetch(`${URL_API}/clientes`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(client),
    })
        .then(response => {
            alert(`Cliente ${client.name} cadastrado com sucesso.`)
            form.client_name.value = ""
            form.client_name.focus()
        })
        .catch(error => {
            alert('Não foi possível salvar o cliente! Aguarde uns minutos e tente novamente.')
        })
}


function validateCPF(input) {
    console.log(input.value)
    const formatCPF = input.value.replace(/\D/g, '')
    let msg = ''

    if (!repeatedNumber(formatCPF) || !checkCpf(formatCPF)) {
        msg = 'O CPF digitado não é válido'
    }
    input.setCustomValidity(msg)
    
}

function repeatedNumber(cpf) {
    const repeated = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let validCpf = true

    repeated.forEach(valueCpf => {
        if (valueCpf == cpf)
            validCpf = false
    })

    return validCpf
}

function checkCpf(cpf) {
    const multiplier = 10

    return digitCheck(cpf, multiplier)
}

function digitCheck(cpf, multiplier){
    if (multiplier >= 12) {
        return true
    }
    let initialMultiplier = multiplier
    let sum = 0
    const CpfNoDigits = cpf.substr(0, multiplier - 1).split('')
    const verifyingDigit = cpf.charAt(multiplier - 1)

    for(let count = 0;  initialMultiplier > 1; initialMultiplier--){
        sum = sum + CpfNoDigits[count] * initialMultiplier
        count++
    }

    if(verifyingDigit == confirmDigit(sum)) {
        return digitCheck(cpf, multiplier + 1)
    }

    return false
}

function confirmDigit(sum){
    let rest = sum % 11
    if(rest >= 2){
        return 11 - rest
    }
    else {
        return 0
    }
}