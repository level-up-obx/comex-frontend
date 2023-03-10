import { Address, Client } from './../../ts/model.js';
import { cep, saveClient } from '../../ts/api.js'
import { cpfMask, telephoneMask, cepMask, numberMask } from '../../ts/mask.js'

const firstName: HTMLInputElement = <HTMLInputElement>document.getElementById("client__firstName")
const lastName: HTMLInputElement = <HTMLInputElement>document.getElementById("client__lastName")
const cpf: HTMLInputElement = <HTMLInputElement>document.getElementById("client__cpf")
const telephone: HTMLInputElement = <HTMLInputElement>document.getElementById("client__telephone")
const zipcode: HTMLInputElement = <HTMLInputElement>document.getElementById("client__zipCode")
const street: HTMLInputElement = <HTMLInputElement>document.getElementById("address__street")
const number: HTMLInputElement = <HTMLInputElement>document.getElementById("address__number")
const complement: HTMLInputElement = <HTMLInputElement>document.getElementById("address__complement")
const neighborhood: HTMLInputElement = <HTMLInputElement>document.getElementById("address__neighborhood")
const city: HTMLInputElement = <HTMLInputElement>document.getElementById("address__city")
const state: HTMLInputElement = <HTMLInputElement>document.getElementById("address__state")
const form: HTMLFormElement = <HTMLFormElement>document.getElementById("client__form")

const maskedCpf: IMask.InputMask<{ mask: string; }> = cpfMask(cpf)
const maskedTelephone: IMask.InputMask<{ mask: string; }> = telephoneMask(telephone)
const maskedCep: IMask.InputMask<{ mask: string }> = cepMask(zipcode)
const maskedNumber: IMask.InputMask<{ mask: string }> = numberMask(number)

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
    cep(parseInt(maskedCep.unmaskedValue))
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
    parseInt(maskedNumber.unmaskedValue),
    complement.value,
    neighborhood.value,
    city.value,
    state.value
  )
  const newClient = new Client(firstName.value, lastName.value, maskedCpf.unmaskedValue, maskedTelephone.unmaskedValue, clientAddress)
  saveClient(newClient);
  clearInputs()
})