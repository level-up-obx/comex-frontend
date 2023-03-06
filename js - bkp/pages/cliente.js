import { createClient } from "../../modelo.js";
import { getCep, saveClient } from "../../api.js";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const cpf = document.getElementById("cpf");
const telephone = document.getElementById("telephone");
const cep = document.getElementById("cep");
const clientForm = document.getElementById("client-form")

const street = document.getElementById("street");
const number = document.getElementById("number");
const complement = document.getElementById("complement");
const district = document.getElementById("district");
const city = document.getElementById("city");
const state = document.getElementById("state");
let address;

const getAddressByCep = async (cep) => {
  const data = await getCep(cep);
  if(data.street != undefined) {
    street.value = data.street;
    street.readOnly = true;
  }
  if(data.district != undefined) {
    district.value = data.district;
    district.readOnly = true;
  }
  if(data.city != undefined) {
    city.value = data.city;
    city.readOnly = true;
  }
  if(data.state != undefined) {
    state.value = data.state;
    state.readOnly = true;
  }
};

const validaCPF = (cpf) => {
  if (cpf.length != 11) {
    return false;
  } else {
    let numeros = cpf.substring(0, 9);
    let digitos = cpf.substring(9);

    let soma = 0;
    for (let i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    for (let k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}


cep.addEventListener("blur", async (event) => {
  event.preventDefault();
  await getAddressByCep(cep.value);
});

clientForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if(validaCPF(cpf.value)) {
    const client = createClient(
      firstName.value,
      lastName.value,
      cpf.value,
      telephone.value,
      address = {
        street: street.value,
        number: number.value,
        complement: complement.value,
        district: district.value,
        city: city.value,
        state: state.value,
      }
    );
    saveClient(client);
  } else {
    window.alert("O CPF está incorreto")
  }
});
