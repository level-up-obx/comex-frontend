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