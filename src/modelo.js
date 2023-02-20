import {getUuid} from "./api.js"
import {getDate} from "./api.js"

export function createCategory(categoryname) {
    return {
        uuid: getUuid(),
        name: categoryname,
        status: "ATIVA",
        createdAt: getDate(),
      };
}

export function createProduct(name, description, price, qtd, category) {
  return {
      uuid: getUuid(),
      name: name,
      description: description,
      price: price,
      qtd: qtd,
      category: category,
      createdAt: getDate(),
    };
}

export function createClient(name, cpf, birth,  email, contact, cep, address, number, complement, district, city, state) {
  return {
    uuid: getUuid(),
    name: name,
    cpf: cpf,
    birth: birth,
    email: email,
    contact: contact,
    address: {
      cep: cep,
      address: address,
      number: number,
      complement: complement,
      district: district,
      city: city,
      state: state,

    }
  }

}