import { createCategory } from "../modelo.js";

const firstName = document.getElementById("");
const lastName = document.getElementById("");
const CPF = document.getElementById("");
const telephone = document.getElementById("");
const cep = document.getElementById("cep");
const btnCep = document.getElementById("getCep")

const street = document.getElementById("street")
const number = document.getElementById("houseNumber")
const district = document.getElementById("district")
const city = document.getElementById("city")
const cityState = document.getElementById("cityState")

const getAddress = async (cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    street.value = data.logradouro;
    district.value = data.bairro;
    city.value = data.localidade;
    cityState.value = data.uf;
    const address = {
        street: data.logradouro,
        district: data.bairro,
        city:data.localidade,
        cityState:data.uf,
    }
    

}

btnCep.addEventListener("click", (event) => {
    event.preventDefault();
    getAddress(cep.value)
})

