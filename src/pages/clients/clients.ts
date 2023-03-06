import { Address, Client } from './../../ts/model.js';
import { cep, saveClient } from '../../ts/api.js'

const firstName: HTMLInputElement = <HTMLInputElement>document.getElementById("first-name")
const lastName: HTMLInputElement = <HTMLInputElement>document.getElementById("last-name")
const cpf: HTMLInputElement = <HTMLInputElement>document.getElementById("cpf")
const telephone: HTMLInputElement = <HTMLInputElement>document.getElementById("telephone")
const zipcode: HTMLInputElement = <HTMLInputElement>document.getElementById("zipcode")
const street: HTMLInputElement = <HTMLInputElement>document.getElementById("street")
const number: HTMLInputElement = <HTMLInputElement>document.getElementById("number")
const complement: HTMLInputElement = <HTMLInputElement>document.getElementById("complement")
const neighborhood: HTMLInputElement = <HTMLInputElement>document.getElementById("neighborhood")
const city: HTMLInputElement = <HTMLInputElement>document.getElementById("city")
const state: HTMLInputElement = <HTMLInputElement>document.getElementById("state")
const form: HTMLFormElement = <HTMLFormElement>document.getElementById("client-form")

function clearInputs() {
  firstName.value = '';
  lastName.value = '';
  cpf.value = '';
  telephone.value = '';
  zipcode.value = '';
  street.value = '';
  number.value = '';
  complement.value = '';
  neighborhood.value = '';
  city.value = '';
  state.value = '';
  firstName.focus();
}

zipcode.addEventListener('blur', () => {
  if (zipcode.value != "") {
    cep(parseInt(zipcode.value))
      .then(response => {
        if (response.logradouro != undefined) {
          street.value = response.logradouro;
          street.readOnly = true;
        } if (response.bairro != undefined) {
          neighborhood.value = response.bairro;
          neighborhood.readOnly = true;
        } if (response.localidade != undefined) {
          city.value = response.localidade;
          city.readOnly = true;
        } if (response.uf != undefined) {
          state.value = response.uf;
          state.readOnly = true;
        }
      }
      )
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const clientAddress = new Address(
    street.value,
    parseInt(number.value),
    complement.value,
    neighborhood.value,
    city.value,
    state.value
  )
  const newClient = new Client(firstName.value, lastName.value, cpf.value, telephone.value, clientAddress)
  saveClient(newClient);
  clearInputs()
})