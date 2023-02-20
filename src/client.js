import {createClient} from "./modelo.js"

const form = document.getElementById("form_client")
const client_name_input = document.getElementById("client_name")
const client_cpf_input = document.getElementById("client_cpf")
const client_birth_date_input = document.getElementById("client_birth_date")
const client_email_input = document.getElementById("client_email")
const client_contact_input = document.getElementById("client_contact")
const client_cep_input = document.getElementById("client_cep")
const client_address_input = document.getElementById("client_address")
const client_number_input = document.getElementById("client_number")
const client_complement_input = document.getElementById("client_complement")
const client_district_input = document.getElementById("client_district")
const client_city_input = document.getElementById("client_city")
const client_state_input = document.getElementById("client_state")



form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const client_name = client_name_input.value

    const client_cpf = client_cpf_input.value

    const client_birth_date = client_birth_date_input.value

    const client_email = client_email_input.value

    const client_contact = client_contact_input.value

    const client_cep = client_cep_input.value

    const client_address = client_address_input.value

    const client_number = client_number_input.value

    const client_complement = client_complement_input.value

    const client_district = client_district_input.value

    const client_city = client_city_input.value

    const client_state = client_state_input.value



    const client = createClient(client_name, client_cpf, client_birth_date, client_email, client_contact, client_cep, client_address,
        client_number, client_complement, client_district, client_city, client_state)
    console.log(client)

    client_name_input.value = ""
    client_name_input.focus()

    client_cpf_input.value = ""

    client_birth_date_input.value = ""

    client_email_input.value = ""

    client_contact_input.value = ""

    client_address_input.value = ""

    client_number_input.value = ""

    client_complement_input.value = ""

    client_district_input.value = ""

    client_city_input.value = ""

    client_state_input.value = ""


})




