import { createClient } from "../modelo.js";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const cpf = document.getElementById("cpf");
const telephone = document.getElementById("telephone");
const cep = document.getElementById("cep");
const btnSend = document.getElementById("client-button")

const street = document.getElementById("street")
const number = document.getElementById("number")
const complement = document.getElementById("complement")
const district = document.getElementById("district")
const city = document.getElementById("city")
const state = document.getElementById("state")

cep.addEventListener("blur", (event) => {
    event.preventDefault();
    getAddress(cep.value)
})
btnSend.addEventListener("submit", (event) => {
    event.preventDefault();
    const address = {
        street: street.value,
        number: number.value,
        complement: complement.value,
        district: district.value,
        city: city.value,
        state: state.value
    }
    createClient(firstName.value, lastName.value, cpf.value, telephone.value, address)
})
btnSend.addEventListener("click", (event) => {
    event.preventDefault();
    const address = {
        street: street.value,
        number: number.value,
        complement: complement.value,
        district: district.value,
        city: city.value,
        state: state.value
    }
    console.log(createClient(firstName.value, lastName.value, cpf.value, telephone.value, address))
})

const getError = (error) => {
    throw new Error("Ocorreu um erro!", { cause: error });
};

const getAddress = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url, {mode: 'no-cors'});
        const data = await response.json();
        // console.log(data)
        if(data.logradouro != "" || data.logradouro != null) {
            street.value = data.logradouro;
            street.readOnly = true;
        }
        if(data.bairro != "" || data.bairro != null) {
            district.value = data.bairro;
            district.readOnly = true;
        }
        if(data.localidade != "" || data.localidade != null) {
            city.value = data.localidade;
            city.readOnly = true;
        }
        if(data.uf != "" || data.uf != null) {
            state.value = data.uf;
            state.readOnly = true;
        }
    } catch (error) {
        getError(error)
    }
}



