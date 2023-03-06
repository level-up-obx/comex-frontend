import { Client } from './model';
import {createTableRow } from '../pages/categories/categories.js'

/*====================== URL API ======================*/
const api: string = "http://localhost:3000";

/*====================== Função de erros e Mensagens ======================*/
function setError(message: string, error?: Error): void {
  setMessage(message);
  throw new Error("Ocorreu algum erro!", error);
}
function setMessage(message: string): void {
  alert(message);
  console.log(message);
}
/*====================== Categoria ======================*/
import { Category } from "./model.js";

export function saveCategory(category: Category): void {
  fetch(`${api}/categorias`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      if (response.status === 201) {
        setMessage(`Categoria: ${category.name} adicionada com sucesso! `);
        localStorage.removeItem("categories")
      } else {
        return;
      }
    })
    .catch((error) =>
      setError(
        `Não foi possível adicionar a categoria ${category.name}. Tente novamente em alguns minutos...`,
        error
      )
    );
}

export function listCategory(): Promise<Category[]> {
  return fetch(`${api}/categorias`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return;
      }
    })
    .catch((error) =>
      setError(
        `Não foi possível listar as categorias. Tente novamente em alguns minutos...`,
        error
      )
    );
}

/*====================== Produto ======================*/
import { Product } from "./model.js";

export function saveProduct(product: Product): void {
  fetch(`${api}/produtos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      if (response.status === 201) {
        setMessage(`Produto: ${product.name} adicionada com sucesso!`);
      } else {
        return;
      }
    })
    .catch((error) =>
      setError(
        `Não foi possível adicionar o produto ${product.name}. Tente novamente em alguns minutos...`,
        error
      )
    );
}

export function listProduct(): Promise<Product[]> {
  return fetch(`${api}/produtos`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return;
      }
    })
    .catch((error) =>
      setError(
        `Não foi possível listar as categorias. Tente novamente em alguns minutos...`,
        error
      )
    );
}

/*====================== Cliente ======================*/
export function saveClient(client: Client): void {
  fetch(`${api}/clientes`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(client)
    } 
  )
  .then(response => {
    if(response.status === 201) {
      setMessage(`Cliente ${client.name} - ${client.cpf} adicionado com sucesso!`);
    }
  })
  .catch(error => setError(
    `Não foi possível salvar o cliente ${client.name} - ${client.cpf}`,
    error
  ))
}

/*====================== CEP ======================*/
export function cep(cep: number): Promise<any> {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      return response.json();
    })
    .catch(error => setError(`Não foi possível buscar o cep: ${cep}. Tente novamente em alguns minutos...`, error))
}