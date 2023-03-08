import { Client } from "../../modelo.js"

// (document.getElementById("btn_cep") as HTMLButtonElement).onclick = searchAddress;
const form = document.getElementById("form_client") as HTMLFormElement;
const URL_API = 'http://localhost:3000'

form.client_name.onblur = validateClientName;
form.client_cpf.onblur = validateClientCPF;
form.client_email.onblur = validadeClientEmail;
form.client_cep.onblur = validateClientCEP;

function validateClientName(event: KeyboardEvent) {
    let input = event.target as HTMLInputElement;
    let value = input.value;
    if (!value) {
        setInputError(input, "Digite seu nome completo.");
        return;
    }
    if (value.length < 2) {
        setInputError(input, "O nome digitado deve ter pelo menos 2 caracteres.");
        return;

    }
    setInputError(input, "");
}

function validateClientCPF(event: KeyboardEvent) {
    let input = event.target as HTMLInputElement;
    let value = input.value;
    if (!value) {
        setInputError(input, "O campo de CPF não pode estar vazio.");
        return;
    }
    const formatCPF = input.value.replace(/\D/g, '')
    if (formatCPF.length < 11) {
        setInputError(input, "O cpf digitado deve ter 11 caracteres.");
        return;
    }

    let msg = validateCPF(input);
    setInputError(input, msg);
}

function validadeClientEmail(event: KeyboardEvent) {
    let msg = '';
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let input = event.target as HTMLInputElement;
    let value = input.value;
    if (!value) {
        setInputError(input, "O campo de email não pode estar vazio.");
        return;
    }

    if (!input.value || !re.test(input.value)) {
        msg = 'O email digitado não é válido';
    }
    setInputError(input, msg);
}


function validateClientCEP(event: KeyboardEvent) {
    let input = event.target as HTMLInputElement;
    let value = input.value;
    if (!value) {
        setInputError(input, "O campo de CEP não pode estar vazio.");
        return;
    }
    if (value.length < 8) {
        setInputError(input, "O CEP precisa ter ao menos 8 caracteres.");
        return;
    }
    setInputError(input, '');
    searchAddress();

}

function setInputError(input: HTMLInputElement, error: string) {
    let parent = input.parentElement as HTMLElement;
    (parent.querySelector('.message_error') as HTMLElement).innerHTML = error;

    if (!error) {
        parent.classList.remove('input_container_invalid');
    } else {
        parent.classList.add('input_container_invalid');
    }

}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const client = new Client(form.client_name.value, form.client_cpf.value, form.client_birth_date.value,
        form.client_email.value, form.client_contact.value, form.client_cep.value, form.client_address.value,
        form.client_number.value, form.client_complement.value, form.client_district.value, form.client_city.value, form.client_state.value);

    const elements = form.getElementsByTagName("input");

    postClient(client);

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.value = "";

    }

    form.client_name.focus();


})

form.client_contact.addEventListener("keyup", (evento: KeyboardEvent) => {
    let input = evento.target as HTMLInputElement;
    input.value = phoneMask(input.value);
})


function phoneMask(value: string): string {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;

}

form.client_cep.addEventListener("keyup", (evento: KeyboardEvent) => {
    let input = evento.target as HTMLInputElement;
    input.value = cepMask(input.value);
})

function cepMask(value: string): string {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    value = value.replace(/(-\d{3})\d+?$/, '$1');
    return value;
}

async function searchAddress() {
    let cep = form.client_cep.value;
    let errorMessage = document.getElementById('erro') as HTMLElement;
    errorMessage.innerHTML = "";
    try {
        let queryCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let queryCepJson = await queryCep.json();
        if (queryCepJson.erro) {
            throw Error('CEP inexistente!');
        }
        form.client_address.value = queryCepJson.logradouro;
        form.client_district.value = queryCepJson.bairro;
        form.client_city.value = queryCepJson.localidade;
        form.client_state.value = queryCepJson.uf;

    } catch (erro) {
        errorMessage.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    }
}

function postClient(client: Client): void {
    let clientData = {
        uuid: client.uuid,
        name: client.name,
        cpf: client.cpf,
        birth: client.birth,
        email: client.email,
        contact: client.contact,
        address: {
            cep: client.address.cep,
            address: client.address.address,
            number: client.address.number,
            complement: client.address.complement,
            district: client.address.district,
            city: client.address.city,
            state: client.address.state
            
        }

    };
    fetch(`${URL_API}/clientes`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
    })
        .then(response => {
            alert(`Cliente ${clientData.name} cadastrado com sucesso.`);
            form.client_name.value = "";
            form.client_name.focus();
        })
        .catch(error => {
            alert('Não foi possível salvar o cliente! Aguarde uns minutos e tente novamente.');
        })
}

function validateCPF(input: HTMLInputElement): string {
    const formatCPF = input.value.replace(/\D/g, '');
    let msg = '';
    if (repeatedNumber(formatCPF) || !checkCpf(formatCPF)) {
        msg = 'O CPF digitado não é válido'
    }
    return msg;
}

function repeatedNumber(cpf: String): boolean {
    let arrayCPF = cpf.split('');
    let val = '';
    let lastVal = '';
    for (let index = 0; index < arrayCPF.length; index++) {
        if (lastVal === '') {
            lastVal = arrayCPF[index];
        }
        val = arrayCPF[index];

        if (lastVal != val) {
            return false;
        }
        lastVal = val;

    }
    return true;

}

function checkCpf(cpf: string) {
    const multiplier = 10;

    return digitCheck(cpf, multiplier);
}

function digitCheck(cpf: string, multiplier: number): boolean {
    if (multiplier >= 12) {
        return true;
    }
    let initialMultiplier = multiplier;
    let sum = 0;
    const cpfNoDigits = cpf.substr(0, multiplier - 1).split('') as String[];
    const verifyingDigit: number = +cpf.charAt(multiplier - 1);

    for (let count = 0; initialMultiplier > 1; initialMultiplier--) {
        let digit: number = +cpfNoDigits[count];
        sum = sum + digit * initialMultiplier;
        count++;
    }
    3
    if (verifyingDigit == confirmDigit(sum)) {
        return digitCheck(cpf, multiplier + 1);
    }

    return false;
}

function confirmDigit(sum: number): number {
    let rest = sum % 11;
    if (rest >= 2) {
        return 11 - rest;
    }
    else {
        return 0;
    }
}