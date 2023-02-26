import { createClient } from "./modelo.js"

document.getElementById("btn_cep").onclick = searchAddress;
const form = document.getElementById("form_client")


form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const client = createClient(form.client_name.value, form.client_cpf.value, form.client_birth_date.value,
        form.client_email.value, form.client_contact.value, form.client_cep.value, form.client_address.value,
        form.client_number.value, form.client_complement.value, form.client_district.value, form.client_city.value, form.client_state.value)

    const elements = form.getElementsByTagName("input")

    console.log(client)

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index]
        element.value = ""

    }

    form.client_name.focus()


})

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


